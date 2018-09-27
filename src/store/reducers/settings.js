import * as actionTypes from '../actions/actionTypes';

import analogAlarm from '../../assets/sounds/analog-watch-alarm.mp3';
import shephardAlarm from '../../assets/sounds/german-shephard.mp3';
import doorBellAlarm from '../../assets/sounds/old-fashioned-door-bell.mp3';
import schoolBellAlarm from '../../assets/sounds/old-fashioned-school-bell.mp3';
import submarineAlarm from '../../assets/sounds/submarine-diving-alarm.mp3';


const songs =  [analogAlarm, shephardAlarm, doorBellAlarm, schoolBellAlarm, submarineAlarm];
const volume = [25, 50, 75, 100];

const initialState = {
    startInstantly: false,
    displaySongs: ['Analog watch', 'German Shephard', 'Door bell', 'School bell', 'Submarine diving'],
    displayVolume: ['25%', '50%', '75%', '100%'],
    selectedSong: analogAlarm,
    selectedVolume: 25
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
            return {
                ...state,
                selectedSong: songs[action.index]
            };
        case actionTypes.SET_VOLUME:
            return {
                ...state,
                selectedVolume: volume[action.index]
            }
        
    };
    return state;
}

export default reducer;