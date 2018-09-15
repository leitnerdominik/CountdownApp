import React from 'react';

import './Dropdown.css';

const dropDown = props => (
    <div className="SelectContainer">
        <select className="SelectDropDown">
        {props.options.map((option, index) => {
            return (
                <option value={index + 1} key={index}>{option}</option>
            );
        })}
        </select>
    </div>
);

export default dropDown;