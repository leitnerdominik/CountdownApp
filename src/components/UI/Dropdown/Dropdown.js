import React from 'react';

import './Dropdown.css';

const dropDown = props => (
    <div>
        <div className="SelectContainer">
            <select className="SelectDropDown" onChange={props.change}>
            {props.options.map((option, index) => {
                return (
                    <option value={index} key={index}>{option}</option>
                );
            })}
            </select>
        </div>
    </div>
);

export default dropDown;