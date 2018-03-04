import { handleActions } from 'redux-actions';

const initialState: any = {};

/*
    Actions
 */
const MAIN: string = 'MAIN';

const reducer = handleActions({
    [MAIN]: (state, action) => {
        console.log(action);
        return state;
    },
}, initialState);

export { reducer };
