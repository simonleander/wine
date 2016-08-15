import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './headline.css';

export default class Headline extends Component {

	renderHeader() {

		const { type = 'h1', value = ''} = this.props;

		switch(type) {

    		case 'h1':
		        return <h1>{value}</h1>
		        break;

    		case 'h2':
		        return <h2>{value}</h2>
		        break;

		}

	}	
	render() {

		return (

			<div className={styles.headline}>
				{this.renderHeader()}
				<div className={styles.underline}></div>
			</div>

		)

	}

}

Headline.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string
}