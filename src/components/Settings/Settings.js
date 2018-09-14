import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../Modal/Modal';
import SettingsPanel from './SettingsPanel/SettingsPanel';

import './Settings.css';

const Settings = props => {
    console.log('[Settings.js] props.show: ', props.show);
    return (
        <div className="Settings">
            <FontAwesomeIcon icon="cog" size="4x" onClick={props.clicked}>
                {console.log(props.show)}
            </FontAwesomeIcon>
            <Modal show={props.show}>
                <SettingsPanel />   
            </Modal>
        </div>
    );

};

export default Settings;