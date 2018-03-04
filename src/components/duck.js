import { handleActions } from 'redux-actions';

const initialState = {};

/*
    Actions
 */
const MAIN = 'MAIN';

const reducer = handleActions({
    [MAIN]: (state, action) => {
        console.log(action);
        return state;
    },
}, initialState);

export { reducer };
