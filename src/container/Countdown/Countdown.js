import React, { Component } from 'react';
import Push from 'push.js';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';
import Modal from '../../components/Modal/Modal';
import ChangeTimer from '../ChangeTimer/ChangeTimer';
import { formatTime } from '../../util/formatTime';

import clockIcon from '../../assets/alarmClock32.png';
import soundFile from '../../assets/audio.mp3';
import { format } from 'url';


class Countdown extends Component {

    state = {
        sec: 600,
        initTime: 600,
        showChangeTime: false,
        playing: false,
        showTimeTitle: false,
    }

    componentDidMount() {
        Push.Permission.request();
        // Push.config({
        //     serviceWorker: '../../serviceWorker.min.js',
        // })
    }

    componentDidUpdate() {
        if(this.state.showTimeTitle) {
            this.showBrowserTitle();
        } else {
            document.title = 'CountdownApp'
        }
    }

    sound = new Audio(soundFile);

    showTimerAddHandler() {
        this.setState({showChangeTime: !this.state.showChangeTime});
    }

    setTimerHandler(sec, min, hour) {
        const sumSec = this.convertToSeconds(Number(sec), Number(min), Number(hour));
        this.setState({sec: sumSec, initTime: sumSec, showChangeTime: !this.state.showChangeTime, playing: false});
        clearInterval(this.timer);

    }

    handlePushNotification() {
        Push.create('Time is over!', {
            body: 'Time is over !',
            icon: {x32: clockIcon},
            timeout: 5000,
            onClick: () => {
                this.stopSound();
            },
            onClose: () => {
                this.stopSound();
            }
        });
    }

    showBrowserTitle() {
        const timeObj = formatTime(this.state.sec);
        document.title = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
    }
    
    toggleShowBrowserTitle(event) {
        // event.stopPropagation();
        // event.preventDefault();
        const showTitle = this.state.showTimeTitle;
        this.setState({showTimeTitle: !showTitle});
    }

    stopSound() {
        window.focus();
        this.sound.pause();
    }

    startTimer() {
        let duration = this.state.sec;
        if(!this.state.playing && this.state.sec > 0) {
            this.setState({playing: true});
            this.timer = setInterval(() => {
                if(--duration >= 0) {
                    this.setState({sec: duration});
                } else {
                    this.handlePushNotification();
                    clearInterval(this.timer);
                    this.sound.play();
                    this.setState({playing: false});
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({playing: false});
    }

    resetTimer() {
        const initTime = this.state.initTime;
        clearInterval(this.timer);
        this.setState({sec: initTime, playing: false});
    }

    convertToSeconds(sec, min, hour) {
        let sumSec = 0;
        const minSec = min * 60;
        const hourSec = hour * 60 * 60;

        sumSec = sec + minSec + hourSec;

        return sumSec;
    }

    render() {
        return (
            <div>
                <Timer sec={this.state.sec} />
                <Control 
                    addTimer={this.showTimerAddHandler.bind(this)}
                    isPlaying={this.state.playing}
                    pause={this.stopTimer.bind(this)}
                    play={this.startTimer.bind(this)}
                    reset={this.resetTimer.bind(this)}
                    toggleTitle={this.toggleShowBrowserTitle.bind(this)}/>
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    <ChangeTimer cancel={this.showTimerAddHandler.bind(this)} setTimer={this.setTimerHandler.bind(this)} />
                </Modal>
            </div>
        );

    }
}

export default Countdown;