import * as actionTypes from '../actions/actionTypes';

const initialState = {
    startInstantly: false,
};

const reducer = (state = initialState, action) => {
    // console.log('[settings reducer]');
    switch(action.type) {
        case actionTypes.START_INSTANTLY:
            const newStartInstantly = !state.startInstantly;
            return {
                ...state,
                startInstantly: newStartInstantly
            };
    };
    return state;
}

export default reducer;