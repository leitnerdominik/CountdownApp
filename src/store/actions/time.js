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

export const togglePlaying = () => {
    return {
        type: actionTypes.TOGGLE_PLAYING
    };
};

export const reduceTimer = () => {
    return {
        type: actionTypes.REDUCE_TIME
    }
}