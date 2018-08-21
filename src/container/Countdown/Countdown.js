import React, { Component } from 'react';

import Timer from '../../components/Timer/Timer';
import Control from '../../components/Control/Control';

class Countdown extends Component {

    state = {
        hour: 0,
        min: 0,
        sec: 0,
    }

    render() {
        return (
            <div>
                <Timer />
                <Control />
            </div>
        );

    }
}

export default Countdown;