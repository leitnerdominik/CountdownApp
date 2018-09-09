import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../Modal/Modal';
import SettingsPanel from './SettingsPanel/SettingsPanel';

import './Settings.css';

const Settings = props => (
    <div className="Settings">
        <FontAwesomeIcon icon="cog" size="4x">
            <Modal>
                <SettingsPanel />
            </Modal>
        </FontAwesomeIcon>
    </div>

);

export default Settings;