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
        this.volumeChangeHandler = this.volumeChangeHandler.bind(this);

        // this.audio = new Audio();
    }

    state = {
        isTitleEnabled: false,
        playInstantly: false
    };

    componentDidUpdate(prevProps) {
        if(this.state.isTitleEnabled) {
            const timeObj = formatTime(this.props.sec);
            document.title = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
        } else {
            document.title = 'CountdownApp'
        }

        if(prevProps.selectedSong !== this.props.selectedSong) {
            this.playSongHandler();
        }
    }

    toggleShowTitleHandler() {
        const oldIsTitleEnabled = this.state.isTitleEnabled;
        this.setState({isTitleEnabled: !oldIsTitleEnabled});
    }

    songChangeHandler(event) {
        const songIndex = event.target.value;
        this.props.onSetSong(songIndex);
    }

    playSongHandler() {
        const audio = new Audio();
        audio.src = this.props.selectedSong;
        const volume = this.props.selectedVolume / 100;
        audio.volume = volume;
        audio.play();
        setTimeout(() => audio.pause(), 2000);
    }

    volumeChangeHandler(event) {
        const volumeIndex = event.target.value;
        this.props.onSetVolume(volumeIndex);
    }
     

    render() {
        return (
            <div className="SettingsContainer" >
            <FontAwesomeIcon icon="cog" className="CogIcon" size="4x" onClick={this.props.clicked}>
            </FontAwesomeIcon>
            <Modal show={this.props.show} clicked={this.props.clicked}>
                <SettingsPanel 
                    close={this.props.clicked}
                    songs={this.props.displaySongs}
                    songChange={this.songChangeHandler}
                    startInstantly={this.props.onStartInstantly}
                    toggleTitle={this.toggleShowTitleHandler}
                    volumeChange={this.volumeChangeHandler}
                    volume={this.props.displayVolume} />   
            </Modal>
        </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        displaySongs: state.settings.displaySongs,
        selectedSong: state.settings.selectedSong,
        displayVolume: state.settings.displayVolume,
        selectedVolume: state.settings.selectedVolume
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStartInstantly: () => dispatch(actionCreators.startInstantly()),
        onSetSong: (songIndex) => dispatch(actionCreators.setSong(songIndex)),
        onSetVolume: (volumeIndex) => dispatch(actionCreators.setVolume(volumeIndex))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);