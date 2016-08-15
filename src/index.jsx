import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureRoutes} from './helpers/routes';
import {configureStore} from './helpers/configureStore';

const routes = configureRoutes();
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		{routes}
  	</Provider>,
	document.getElementById('app')
);