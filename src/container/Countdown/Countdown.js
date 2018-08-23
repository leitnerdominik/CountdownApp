import React, { Component } from 'react';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';
import Modal from '../../components/Modal/Modal';
import ChangeTimer from '../../components/ChangeTimer/ChangeTimer';


class Countdown extends Component {

    state = {
        hour: 0,
        min: 0,
        sec: 0,
        showChangeTime: false,
    }

    showTimerAddHandler() {
        this.setState({showChangeTime: !this.state.showChangeTime});
    }

    render() {
        return (
            <div>
                <Timer />
                <Control addTimer={this.showTimerAddHandler.bind(this)} />
                <Modal show={this.state.showChangeTime} clicked={this.showTimerAddHandler.bind(this)}>
                    <ChangeTimer cancel={this.showTimerAddHandler.bind(this)}/>
                </Modal>
            </div>
        );

    }
}

export default Countdown;