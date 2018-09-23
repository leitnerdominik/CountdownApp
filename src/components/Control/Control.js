import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Control.css'

const control = (props) => {

    let pausePlayIcon = "play";
    let playPauseControl = props.play;
    let showHourglass = null;
    
    if(props.isPlaying) {
        pausePlayIcon = "pause";
        playPauseControl = props.pause;
        showHourglass = {opacity: '1'};
    }

    let middleControl = <FontAwesomeIcon className="Hourglass" style={showHourglass} icon="hourglass-half" size="4x"/>;
    
    if(props.timeOver) {
        middleControl = (
            <div className="StopContainer">
                <div>
                    <button className="Stop" onClick={props.stopAlarm}><FontAwesomeIcon icon="stop" size="4x"/></button>
                </div>
                <label className="LabelStop">Stop Alarm!</label>
            </div>
        );

    }


    return (
        <div>
            <div className="Control">
                <button onClick={playPauseControl}>
                    <FontAwesomeIcon icon={pausePlayIcon} size="2x"/>
                </button>
                {middleControl}
                <button onClick={props.reset}>
                    <FontAwesomeIcon icon="undo" size="2x"/>
                </button>
            </div>
            <div style={{
                margin: '0 auto'
            }}>
                <button className="AddTimer" onClick={props.addTimer}>
                    <FontAwesomeIcon icon={["far", "clock"]}/> change Timer
                </button>
            </div>
        </div>
    );
};

export default control;