import React from 'react';

import './Timer.css'

import { formatTime } from '../../util/formatTime';

const timer = (props) => {

    const timeObj = formatTime(props.sec)

    return (
        <div className="Timer">
            <span>{timeObj.hours}</span>
            :
            <span>{timeObj.minutes}</span>
            :
            <span>{timeObj.seconds}</span>
        </div>
    );
};

export default timer;