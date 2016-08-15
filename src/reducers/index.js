'use strict';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as uiReducer} from 'redux-ui'
import {WINE_COMMENT} from '../actions/actions.types';
import wine from './wine.reducer';

export const reducers = combineReducers({
	wine,
	ui: uiReducer,
	form: formReducer.plugin({
		comment: (state, action) => {
			
			switch(action.type) {

				case WINE_COMMENT:

					return {...state, comment : {}};

				default: 

					return state;

			}


		}


	})
});