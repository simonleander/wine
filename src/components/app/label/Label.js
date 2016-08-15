import React, {Component, PropTypes} from 'react';
import styles from './label.css';

export default class Label extends Component {

	render() {

		const {value, id} = this.props;

		return (
			
			<label 
				className={styles.label}
				htmlFor={id}>
				{value}
			</label>
			
		)

	}

}

Label.propTypes = {
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}