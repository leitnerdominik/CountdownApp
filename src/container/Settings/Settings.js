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
        this.songChangeHandler = this.songChangeHandler.bind(this);

        this.audio = new Audio();
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
        const oldIsTitleEnabled = this.state.isTitleEnabled;
        this.setState({isTitleEnabled: !oldIsTitleEnabled});
    }

    songChangeHandler(event) {
        const songIndex = event.target.value;
        this.props.onSetSong(songIndex);
        
        const currentSong = this.props.selectedSong;
        console.log(currentSong);
        this.audio.src = currentSong;
        this.audio.play();

        setTimeout(() => this.audio.pause(), 2000);
        
    }

    render() {
        return (
            <div className="SettingsContainer">
            <FontAwesomeIcon icon="cog" size="4x" onClick={this.props.clicked}>
            </FontAwesomeIcon>
            <Modal show={this.props.show} clicked={this.props.clicked}>
                <SettingsPanel 
                    close={this.props.clicked}
                    songs={this.props.displaySongs}
                    change={this.songChangeHandler}
                    startInstantly={this.props.onStartInstantly}
                    toggleTitle={this.toggleShowTitleHandler}/>   
            </Modal>
        </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        displaySongs: state.settings.displaySongs,
        selectedSong: state.settings.selectedSong
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStartInstantly: () => dispatch(actionCreators.startInstantly()),
        onSetSong: (songIndex) => dispatch(actionCreators.setSong(songIndex))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);