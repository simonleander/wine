import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from '../components/app/App';
import Wine from '../components/wine/Wine';
import WineAdd from '../components/wineAdd/WineAdd';
import Wines from '../components/wines/Wines';

export const configureRoutes = () => { 

	return (

		<Router history={browserHistory}>
		 	<Route path="/" component={App}>
		 		<Route path="wine/add" component={WineAdd} />
		    	<Route path="wine/:url" component={Wine} />
		    	<Route path="wines" component={Wines} />
		    	<IndexRoute component={Wines} />
		    </Route>
		</Router>

	)

}