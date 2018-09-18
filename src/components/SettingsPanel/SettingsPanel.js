import React from 'react';

import './SettingsPanel.css';

import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';
import Dropdown from '../UI/Dropdown/Dropdown';

const settingsPanel = props => {
    return (
        <div className="SettingsPanelContainer">
            <label className="SettingsLabel Slbl1">Show time in title:</label>
            <ToggleSwitch clicked={props.toggleTitle}/>
            <label className="SettingsLabel Slbl2">Start Timer instantly:</label>
            <ToggleSwitch clicked={props.startInstantly}/>
            <label className="SettingsLabel Slbl3">Change sound:</label>
            <Dropdown options={props.songs} change={props.change}/>
            <div className="SettingsFooter">
                <button onClick={props.close} style={{color: 'red'}}>CLOSE</button>
                {/* <button style={{color: 'green'}}>SAVE CHANGES</button> */}
            </div>
        </div>
    );
};

export default settingsPanel;