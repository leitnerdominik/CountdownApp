import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faUndo, faClock, faBan, faCheck, faBackspace } from '@fortawesome/free-solid-svg-icons';

import Countdown from './container/Countdown/Countdown';

import './App.css'

library.add(far, faPlay, faStop, faUndo, faClock, faBan, faCheck, faBackspace);

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