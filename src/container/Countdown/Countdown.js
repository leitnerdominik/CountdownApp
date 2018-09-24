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
            isTimeOver: false
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

    // componentDidUpdate() {
    //     if(this.props.startInstantly && !this.props.playing) {
    //         this.startTimer();
    //     }
    // }

    setTimeHandler(sec, min, hour) {
        this.props.onSetTimer(sec, min, hour);
        this.setState({showChangeTime: !this.state.showChangeTime});
        if(this.state.isTimeOver) {
            this.stopAlarm();
        }

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
                    this.audio.src = this.props.song;
                    this.audio.play();
                    this.props.togglePlayTimer(false);
                    this.setState({isTimeOver: true});
                }
            }, 1000);
        }
    }

    stopAlarm() {
        this.audio.pause();
        this.setState({isTimeOver: false});
    }

    stopTimer() {
        clearInterval(this.timer);
        this.props.togglePlayTimer(false);
    }

    resetTimer() {
        clearInterval(this.timer);
        this.props.resetTimer();
        this.stopAlarm();
    }

    showSettings() {
        const oldShowSettings = this.state.showSettings;
        this.setState({showSettings: !oldShowSettings});
    }

    render() {
        return (
            <div>
                <Settings show={this.state.showSettings} sec={this.props.seconds} clicked={this.showSettings.bind(this)} />
                <Timer sec={this.props.seconds} />
                <Control 
                    addTimer={this.showTimerAddHandler.bind(this)}
                    isPlaying={this.props.playing}
                    pause={this.stopTimer.bind(this)}
                    play={this.startTimer.bind(this)}
                    reset={this.resetTimer.bind(this)}
                    timeOver={this.state.isTimeOver}
                    stopAlarm={this.stopAlarm.bind(this)}/>
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    {this.state.showChangeTime
                        ? <ChangeTimer 
                                cancel={this.showTimerAddHandler.bind(this)}
                                setTimer={this.setTimeHandler.bind(this)} />
                        : null}
                </Modal>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        seconds: state.time.sec,
        playing: state.time.playing,
        timeOver: state.time.timeOver,
        startInstantly: state.settings.startInstantly,
        song: state.settings.selectedSong
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