import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sec: 600,
    initSec: 600,
    playing: false,
};

const convertToSeconds = (sec, min, hour) => {
    let sumSec = 0;
    const minSec = min * 60;
    const hourSec = hour * 60 * 60;
    sumSec = Number(sec) + Number(minSec) + Number(hourSec);

    return sumSec;
}

const timeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TIMER:
            const sumSec = convertToSeconds(action.payload.sec, action.payload.min, action.payload.hour);
            return {
                ...state,
                sec: sumSec,
                initSec: sumSec,
            }
        case actionTypes.TOGGLE_PLAYING:
            return {
                ...state,
                playing: action.payload.enable
            }
        case actionTypes.REDUCE_TIME:
            const currentTime = state.sec;
            return {
                ...state,
                sec: currentTime - 1,
            }
        case actionTypes.RESET_TIMER:
            const initTime = state.initSec;
            return {
                ...state,
                sec: initTime,
                playing: false,
            }
    }

    return state;
}

export default timeReducer;