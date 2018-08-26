import React from 'react';

import './Timer.css'

const timer = (props) => {

    let hours = parseInt(props.sec / 3600, 10);
    let restMinutes = parseInt(props.sec % 3600, 10);
    let minutes = parseInt(restMinutes / 60, 10);
    let seconds = parseInt(restMinutes % 60, 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return (
        <div className="Timer">
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};

export default timer;