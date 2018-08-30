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

    return (
        <div>
            <div className="Control">
                <button onClick={playPauseControl}>
                    <FontAwesomeIcon icon={pausePlayIcon} size="2x"/>
                </button>
                <FontAwesomeIcon className="Hourglass" style={showHourglass} icon="hourglass-half" size="4x"/>
                <button onClick={props.reset}>
                    <FontAwesomeIcon icon="undo" size="2x"/>
                </button>
            </div>
            <div>
                <label>Show time in title</label>
                <label className="Switch" >
                    <input type="checkbox" onClick={props.toggleTitle} />
                    <span className="Slider"></span>
                </label>
                <button className="AddTimer" onClick={props.addTimer}>
                    <FontAwesomeIcon icon={["far", "clock"]}/> change Timer
                </button>
            </div>
        </div>
    );
};

export default control;