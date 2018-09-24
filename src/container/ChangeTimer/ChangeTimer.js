import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ChangeTimer.css'

class ChangeTimer extends Component {

    constructor(props) {
        super(props);

        this.inputHandler = this.inputHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.deleteInput = this.deleteInput.bind(this);
        this.displayInputHandler = this.displayInputHandler.bind(this);
    }
    
    state = {
        inputNumber: '',
        displayNumber: {
            hour: '00',
            min: '00',
            sec: '00',
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDownHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDownHandler);
    }


    keyDownHandler(event) {
        if(Number.isInteger(Number(event.key))) {
            this.inputHandler(event.key);
        } else if(event.key === 'Backspace') {
            this.deleteInput();
        }
    }

    inputHandler(number) {
        let n = this.state.inputNumber + number;

        if(n.length <= 6) {
            const newNumber = n.replace(/^0+/, '');

            this.setState({inputNumber: newNumber}, this.displayInputHandler)
        }
    }

    displayInputHandler() {
        let number = this.state.inputNumber;
        number = ('000000' + number).slice(-6);

        const display = {
            hour: number.slice(0, 2),
            min: number.slice(2, 4),
            sec: number.slice(4, 6),
        }

        this.setState({displayNumber: display})

    }

    deleteInput() {
        let number = this.state.inputNumber;

        number = number.slice(0, -1);

        this.setState({inputNumber: number}, this.displayInputHandler)

    }

    render() {

        const applyButton = this.state.inputNumber.length > 0 ? 
            <button 
                className="Apply"
                onClick={() =>this.props.setTimer(this.state.displayNumber.sec, this.state.displayNumber.min, this.state.displayNumber.hour)}>
                    <FontAwesomeIcon icon="check" size="3x"/>
            </button> : null;
        const borderInput = this.state.inputNumber.length > 0 ? '1px solid #3060e8' : null;

        return (
            <div className="OuterContainer">
            <div className="TimerInput" style={{borderBottom: borderInput}}>
                {this.state.displayNumber.hour}h
                {this.state.displayNumber.min}m
                {this.state.displayNumber.sec}s
            <FontAwesomeIcon style={{marginLeft: '30px', cursor: 'pointer'}} icon="backspace" onClick={this.deleteInput} />
            </div>
            <div className="NumberInput">
                <div>
                    <button onClick={() => this.inputHandler('1')}>1</button>
                    <button onClick={() => this.inputHandler('2')}>2</button>
                    <button onClick={() => this.inputHandler('3')}>3</button>
                </div>
                <div>
                    <button onClick={() => this.inputHandler('4')}>4</button>
                    <button onClick={() => this.inputHandler('5')}>5</button>
                    <button onClick={() => this.inputHandler('6')}>6</button>
                </div>
                <div>
                    <button onClick={() => this.inputHandler('7')}>7</button>
                    <button onClick={() => this.inputHandler('8')}>8</button>
                    <button onClick={() => this.inputHandler('9')}>9</button>
                </div>
                <div>
                    <button onClick={() => this.inputHandler('0')}>0</button>
                </div>
        </div>
        <div className="Footer">
            <button onClick={this.props.cancel} className="Cancel"><FontAwesomeIcon icon="ban" size="3x"/></button>
            {applyButton}
        </div>
        </div >
        );
    }
}

export default ChangeTimer;