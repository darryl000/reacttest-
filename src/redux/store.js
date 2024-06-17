import { legacy_createStore } from 'redux';
import gameReducer from './reducers';

const store = legacy_createStore(gameReducer);

export default store;
