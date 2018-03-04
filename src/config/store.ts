import { createStore } from 'redux';
import { reducer } from '../components/duck';

const store = createStore(reducer);

export { store };
