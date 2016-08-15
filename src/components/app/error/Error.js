import React, {Component, PropTypes} from 'react';
import styles from './error.css';

export default class Error extends Component {

	render() {

		const {value} = this.props;

		return (

			<div className={styles.error}>
				{value}
			</div>

		)

	}

}

Error.propTypes = {
	value: PropTypes.string.isRequired
}