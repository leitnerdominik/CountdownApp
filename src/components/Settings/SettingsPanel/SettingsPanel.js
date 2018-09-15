import React from 'react';

import './SettingsPanel.css';

import ToggleSwitch from '../../UI/ToggleSwitch/ToggleSwitch';
import Dropdown from '../../UI/Dropdown/Dropdown';

const exampleSongs = ['Song1', 'Song2', 'Song3', 'Song4'];

const settingsPanel = props => {
    return (
        <div className="SettingsContainer">
            <label className="SettingsLabel Slbl1">Show time in title:</label>
            <ToggleSwitch />
            <label className="SettingsLabel Slbl2">Start Timer instantly:</label>
            <ToggleSwitch />
            <label className="SettingsLabel Slbl3">Change sound:</label>
            <Dropdown options={exampleSongs}/>
            <div className="SettingsFooter">
                <button style={{color: 'red'}}>CLOSE</button>
                <button style={{color: 'green'}}>SAVE CHANGES</button>
            </div>
        </div>
    );
};

export default settingsPanel;