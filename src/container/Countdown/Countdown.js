import React, { Component } from 'react';
// import Push from 'push.js';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/time';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';
import Modal from '../../components/Modal/Modal';
import ChangeTimer from '../ChangeTimer/ChangeTimer';
import Settings from '../../components/Settings/Settings';
import { formatTime } from '../../util/formatTime';

import clockIcon from '../../assets/alarmClock32.png';
import soundFile from '../../assets/audio.mp3';


class Countdown extends Component {

    state = {
        sec: 600,
        initTime: 600,
        showChangeTime: false,
        playing: false,
        showTimeTitle: false,
        showSettings: false,
    }

    // componentDidMount() {
    //     Push.Permission.request();
    //     // Push.config({
    //     //     serviceWorker: '../../serviceWorker.min.js',
    //     // })
    // }

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

    // setTimerHandler(sec, min, hour) {
    //     const sumSec = this.convertToSeconds(Number(sec), Number(min), Number(hour));
    //     this.setState({sec: sumSec, initTime: sumSec, showChangeTime: !this.state.showChangeTime, playing: false});
    //     clearInterval(this.timer);

    // }

    setTimeHandler(sec, min, hour) {
        this.props.onSetTimer(sec, min, hour);
        this.setState({showChangeTime: !this.state.showChangeTime});
        clearInterval(this.timer);
    }

    // handlePushNotification() {
    //     Push.create('Time is over!', {
    //         body: 'Time is over !',
    //         icon: {x32: clockIcon},
    //         timeout: 5000,
    //         onClick: () => {
    //             this.stopSound();
    //         },
    //         onClose: () => {
    //             this.stopSound();
    //         }
    //     });
    // }

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
        if(!this.props.playing && this.props.seconds) {
            this.props.togglePlayTimer();
            this.timer = setInterval(() => {
                if(this.props.seconds) {
                    this.props.reduceTime();
                } else {
                    clearInterval(this.timer);
                    this.sound.play();
                    this.props.togglePlayTimer();
                    console.log('TIME OUT!!!');
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.props.togglePlayTimer();
    }

    resetTimer() {
        const initTime = this.state.initTime;
        clearInterval(this.timer);
        this.setState({sec: initTime, playing: false});
    }

    // convertToSeconds(sec, min, hour) {
    //     let sumSec = 0;
    //     const minSec = min * 60;
    //     const hourSec = hour * 60 * 60;

    //     sumSec = sec + minSec + hourSec;

    //     return sumSec;
    // }

    showSettings() {
        oldShowSettings = this.state.showSettings;
        this.setState({showSettings: !oldShowSettings});
    }

    render() {
        console.log(this.props.seconds);
        return (
            <div>
                {/* <Modal show={this.state.showSettings} clicked={this.showSettings.bind(this)}> */}
                <Settings />
                <Timer sec={this.props.seconds} />
                <Control 
                    addTimer={this.showTimerAddHandler.bind(this)}
                    isPlaying={this.props.playing}
                    pause={this.stopTimer.bind(this)}
                    play={this.startTimer.bind(this)}
                    reset={this.resetTimer.bind(this)}
                    toggleTitle={this.toggleShowBrowserTitle.bind(this)}/>
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    <ChangeTimer cancel={this.showTimerAddHandler.bind(this)} setTimer={this.setTimeHandler.bind(this)} />
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        seconds: state.sec,
        playing: state.playing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTimer: (sec, min, hour) => dispatch(actionCreators.setTimer(sec, min, hour)),
        togglePlayTimer: () => dispatch(actionCreators.togglePlaying()),
        reduceTime: () => dispatch(actionCreators.reduceTime())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)  ;