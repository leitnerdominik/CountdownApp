import * as actionTypes from './actionTypes';

export const startInstantly = () => {
    return {
        type: actionTypes.START_INSTANTLY
    };
};

export const setSong = (index) => {
    return {
        type: actionTypes.SET_SONG,
        index: index,
    };
};