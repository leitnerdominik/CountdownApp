import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'


const modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div 
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                {props.children}
            </div>
        </div>
    );
    
};

export default modal;