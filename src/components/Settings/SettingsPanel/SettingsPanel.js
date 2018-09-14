import React from 'react';

import './SettingsPanel.css';

const settingsPanel = props => {
    return (
        <div className="SettingsContainer">
            <div className="ControlFooter">
                <label className="Switch" >
                    <input type="checkbox" onClick={props.toggleTitle} />
                    <span className="Slider"></span>
                </label>
                <label className="LblTitle">Show time in title</label>
            </div>
        </div>
    );
};

export default settingsPanel;