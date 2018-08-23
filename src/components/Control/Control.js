import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Control.css'

const control = (props) => (
    <div>
        <div className="Control">
            <button>
                <FontAwesomeIcon icon="play" size="2x"/>
            </button>
            <button className="Stop">
                <FontAwesomeIcon icon="stop" size="4x"/>
            </button>
            <button>
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

export default control;