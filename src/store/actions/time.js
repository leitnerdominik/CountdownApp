import * as actionTypes from './actionTypes';

export const setTimer = (sec, min, hour) => {
    return {
        type: actionTypes.SET_TIMER,
        payload: {
            sec,
            min,
            hour,
        }
    }
};

export const togglePlaying = (enable) => {
    return {
        type: actionTypes.TOGGLE_PLAYING,
        payload: {
            enable: enable,
        }
    };
};

export const reduceTime = () => {
    return {
        type: actionTypes.REDUCE_TIME
    };
};

export const resetTimer = () => {
    return {
        type: actionTypes.RESET_TIMER
    };
};