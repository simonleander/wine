import React, {Component} from 'react'
import {Link} from 'react-router';
import ui from 'redux-ui';
import Header from './header/Header';
import styles from './app.css';

export default class App extends Component {

	render() {

		return (
	
			<div className={styles.appInner}>
				<Header />
				<div className={styles.appContent}>
					{this.props.children}
				</div>
			</div>

		)

	}

}