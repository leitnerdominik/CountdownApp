import React from 'react';

import './toggleSwitch.css';

const toggleSwitch = props => (
    <div>
        <label className="Switch">
            <input type="checkbox" />
            <span className="ToggleSwitch" onClick={props.clicked}></span>
        </label>
    </div>
);

export default toggleSwitch;