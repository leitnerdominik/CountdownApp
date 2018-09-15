import React from 'react';

import './toggleSwitch.css';

const toggleSwitch = props => (
    <div>
        <label className="Switch" >
            <input type="checkbox" onClick={props.toggleTitle} />
            <span className="ToggleSwitch"></span>
        </label>
    </div>
);

export default toggleSwitch;