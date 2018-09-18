import * as actionTypes from '../actions/actionTypes';

import analogAlarm from '../../assets/sounds/analog-watch-alarm.mp3';
import shephardAlarm from '../../assets/sounds/german-shephard.mp3';
import doorBellAlarm from '../../assets/sounds/old-fashioned-door-bell.mp3';
import schoolBellAlarm from '../../assets/sounds/old-fashioned-school-bell.mp3';
import submarineAlarm from '../../assets/sounds/submarine-diving-alarm.mp3';


const songs =  [analogAlarm, shephardAlarm, doorBellAlarm, schoolBellAlarm, submarineAlarm];

const initialState = {
    startInstantly: false,
    displaySongs: ['Analog watch', 'German Shephard', 'Door bell', 'School bell', 'Submarine diving'],
    selectedSong: analogAlarm
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_INSTANTLY:
            const newStartInstantly = !state.startInstantly;
            return {
                ...state,
                startInstantly: newStartInstantly
            };
        case actionTypes.SET_SONG:
            const newSong = songs[action.index];
            return {
                ...state,
                selectedSong: newSong
            };
    };
    return state;
}

export default reducer;