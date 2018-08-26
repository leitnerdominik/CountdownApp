import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Control.css'

const control = (props) => {

    const pausePlayIcon = props.isPlaying ? "pause" : "play";
    const playPauseControl = props.isPlaying ? props.pause : props.play; 
    
    return (
        <div>
            <div className="Control">
                <button onClick={playPauseControl}>
                    <FontAwesomeIcon icon={pausePlayIcon} size="2x"/>
                </button>
                <button className="Stop">
                    <FontAwesomeIcon icon="stop" size="4x"/>
                </button>
                <button onClick={props.reset}>
                    <FontAwesomeIcon icon="undo" size="2x"/>
                </button>
            </div>
            <div>
                <button className="AddTimer" onClick={props.addTimer}>
                    <FontAwesomeIcon icon={["far", "clock"]}/> change Timer
                </button>
            </div>
        </div>
    );
};

export default control;