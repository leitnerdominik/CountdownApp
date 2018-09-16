import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import SettingsPanel from '../../components/SettingsPanel/SettingsPanel';
import { formatTime } from '../../util/formatTime';



import * as actionCreators from '../../store/actions/index';

import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.toggleShowTitleHandler = this.toggleShowTitleHandler.bind(this);
    }

    state = {
        isTitleEnabled: false,
        playInstantly: false
    }

    componentDidUpdate() {
        if(this.state.isTitleEnabled) {
            const timeObj = formatTime(this.props.sec);
            document.title = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
        } else {
            document.title = 'CountdownApp'
        }
    }

    toggleShowTitleHandler() {
        console.log('[Settings.js] toggleTitle');
        const oldIsTitleEnabled = this.state.isTitleEnabled;
        this.setState({isTitleEnabled: !oldIsTitleEnabled});
    }

    render() {
        return (
            <div className="SettingsContainer">
            <FontAwesomeIcon icon="cog" size="4x" onClick={this.props.clicked}>
            </FontAwesomeIcon>
            <Modal show={this.props.show} clicked={this.props.clicked}>
                <SettingsPanel close={this.props.clicked} startInstantly={this.props.onStartInstantly} toggleTitle={this.toggleShowTitleHandler}/>   
            </Modal>
        </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStartInstantly: () => dispatch(actionCreators.startInstantly())
    };
};


export default connect(null, mapDispatchToProps)(Settings);