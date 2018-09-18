import React, { Component } from 'react';
// import Push from 'push.js';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';
import Modal from '../../components/UI/Modal/Modal';
import ChangeTimer from '../ChangeTimer/ChangeTimer';
import Settings from '../Settings/Settings';

// import clockIcon from '../../assets/alarmClock32.png';



class Countdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showChangeTime: false,
            showTimeTitle: false,
            showSettings: false,
        };

        this.audio = new Audio();
    }

    

    // componentDidMount() {
    //     Push.Permission.request();
    //     // Push.config({
    //     //     serviceWorker: '../../serviceWorker.min.js',
    //     // })
    // }

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
        console.log('[Countdown.js]', this.props.startInstantly);
        if(this.props.startInstantly) {
            this.startTimer();
        } else {
            this.props.togglePlayTimer(false);
            clearInterval(this.timer);
        }
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
    
    // toggleShowBrowserTitle(event) {
    //     // event.stopPropagation();
    //     // event.preventDefault();
    //     const showTitle = this.state.showTimeTitle;
    //     this.setState({showTimeTitle: !showTitle});
    // }

    stopSound() {
        window.focus();
        this.sound.pause();
    }

    startTimer() {
        if(!this.props.playing && this.props.seconds) {
            this.props.togglePlayTimer(true);
            this.timer = setInterval(() => {
                if(this.props.seconds) {
                    this.props.reduceTime();
                } else {
                    clearInterval(this.timer);
                    this.sound.play();
                    this.props.togglePlayTimer(false);
                    console.log('TIME OUT!!!');
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.props.togglePlayTimer(false);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.props.resetTimer();
    }

    // convertToSeconds(sec, min, hour) {
    //     let sumSec = 0;
    //     const minSec = min * 60;
    //     const hourSec = hour * 60 * 60;

    //     sumSec = sec + minSec + hourSec;

    //     return sumSec;
    // }

    showSettings() {
        const oldShowSettings = this.state.showSettings;
        this.setState({showSettings: !oldShowSettings});
    }

    render() {
        return (
            <div>
                {/* <Modal show={this.state.showSettings} clicked={this.showSettings.bind(this)}> */}
                <Settings show={this.state.showSettings} songs={this.sounds} sec={this.props.seconds} clicked={this.showSettings.bind(this)} />
                <Timer sec={this.props.seconds} />
                <Control 
                    addTimer={this.showTimerAddHandler.bind(this)}
                    isPlaying={this.props.playing}
                    pause={this.stopTimer.bind(this)}
                    play={this.startTimer.bind(this)}
                    reset={this.resetTimer.bind(this)}/>
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    <ChangeTimer cancel={this.showTimerAddHandler.bind(this)} setTimer={this.setTimeHandler.bind(this)} />
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        seconds: state.time.sec,
        playing: state.time.playing,
        startInstantly: state.settings.startInstantly
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTimer: (sec, min, hour) => dispatch(actionCreators.setTimer(sec, min, hour)),
        togglePlayTimer: (enable) => dispatch(actionCreators.togglePlaying(enable)),
        reduceTime: () => dispatch(actionCreators.reduceTime()),
        resetTimer: () => dispatch(actionCreators.resetTimer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)  ;