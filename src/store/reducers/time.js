import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sec: 600,
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
                sec: sumSec
            }
        case actionTypes.TOGGLE_PLAYING:
            const currentPlaying = state.playing;
            return {
                ...state,
                playing: !currentPlaying,
            }
        case actionTypes.REDUCE_TIME:
            const currentTime = state.sec;
            return {
                ...state,
                sec: currentTime - 1,
            }
    }

    return state;
}

export default timeReducer;