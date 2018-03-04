import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../components/duck';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export { store };
