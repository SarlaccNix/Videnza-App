import combineReducers from '../reducers/root.reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import {applyMiddleware, compose, createStore} from 'redux';
// import AsyncStorage from '@react-native-community/async-storage';

const configureStore = () => {
  return createStore(
    combineReducers,
    compose(applyMiddleware(thunk, promise, logger)),
    // compose(applyMiddleware(thunk, promise)),
  );
};

const store = configureStore();
export default store;
