import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const control = (props) => (
    <div className="control">
        <button>
            <FontAwesomeIcon icon="play" size="2x"/>
        </button>
        <button id="stop">
            <FontAwesomeIcon icon="stop" size="4x"/>
        </button>
        <button>
            <FontAwesomeIcon icon="undo" size="2x"/>
        </button>
</div>
);

export default control;