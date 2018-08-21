import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faUndo } from '@fortawesome/free-solid-svg-icons';

import Countdown from './container/Countdown/Countdown';

library.add(faPlay, faStop, faUndo);

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