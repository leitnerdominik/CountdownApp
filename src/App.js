import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndo, faClock, faBan, faCheck, faBackspace, faPause, faHourglassHalf, faCog, faStop } from '@fortawesome/free-solid-svg-icons';

import Countdown from './container/Countdown/Countdown';

import './App.css'

library.add(far, faPlay, faUndo, faClock, faBan, faCheck, faBackspace, faPause, faHourglassHalf, faCog, faStop);

class App extends Component {
    render() {
        return (
            <div>
                <Countdown />
            </div>
        );
    }
}

export default App;