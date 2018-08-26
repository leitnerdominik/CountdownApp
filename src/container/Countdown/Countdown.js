import React, { Component } from 'react';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';
import Modal from '../../components/Modal/Modal';
import ChangeTimer from '../../components/ChangeTimer/ChangeTimer';


class Countdown extends Component {

    state = {
        sec: 0,
        initTime: 0,
        showChangeTime: false,
        playing: false,
    }

    showTimerAddHandler() {
        this.setState({showChangeTime: !this.state.showChangeTime});
    }

    setTimerHandler(sec, min, hour) {
        const sumSec = this.convertToSeconds(Number(sec), Number(min), Number(hour));
        this.setState({sec: sumSec, initTime: sumSec, showChangeTime: !this.state.showChangeTime});
    }

    startTimer() {
        let duration = this.state.sec;
        if(!this.state.playing) {
            this.setState({playing: true});
            this.timer = setInterval(() => {
                if(--duration >= 0) {
                    this.setState({sec: duration});
                } else {
                    clearInterval(this.timer);
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
                <Control addTimer={this.showTimerAddHandler.bind(this)} isPlaying={this.state.playing} pause={this.stopTimer.bind(this)} play={this.startTimer.bind(this)} reset={this.resetTimer.bind(this)}/>
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    <ChangeTimer cancel={this.showTimerAddHandler.bind(this)} setTimer={this.setTimerHandler.bind(this)} />
                </Modal>
            </div>
        );

    }
}

export default Countdown;