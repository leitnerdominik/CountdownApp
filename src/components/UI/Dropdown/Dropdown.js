import React from 'react';

import './Dropdown.css';

const dropDown = props => (
    <div style={{position: 'relative'}}>
        <div className="SelectContainer">
            <select className="SelectDropDown">
            {props.options.map((option, index) => {
                return (
                    <option value={index + 1} key={index}>{option}</option>
                );
            })}
            </select>
        </div>
    </div>
);

export default dropDown;