import React from 'react';

import './SettingsPanel.css';

import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';
import Dropdown from '../UI/Dropdown/Dropdown';

const settingsPanel = props => {
    return (
        <div className="SettingsPanelContainer">
            <div className="SettingsPanelGrid">
                <label className="SettingsLabel">Show time in title:</label>
                <ToggleSwitch clicked={props.toggleTitle}/>
                <label className="SettingsLabel">start immediately:</label>
                <ToggleSwitch clicked={props.startInstantly}/>
                <label className="SettingsLabel">Change sound:</label>
                <Dropdown options={props.songs} change={props.songChange} />
                <label className="SettingsLabel">Volume:</label>
                <Dropdown options={props.volume} change={props.volumeChange} />
            </div>
            <div className="SettingsFooter">
                <button onClick={props.close} style={{color: 'red'}}>CLOSE</button>
            </div>
        </div>
    );
};

export default settingsPanel;