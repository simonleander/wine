import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {throttle} from 'lodash';
import {reducers} from '../reducers';
import {loadState, saveState} from './localeStorage';

export const configureStore = () => {

	const persistedState = loadState();
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
	const store = createStoreWithMiddleware(
		reducers,
		persistedState
	);

	store.subscribe(throttle(() => {
		saveState({
			wine: store.getState().wine
		});
	}, 1000));

	return store;

};

export default configureStore;