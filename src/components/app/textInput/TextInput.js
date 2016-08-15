import React, {Component, PropTypes} from 'react';
import styles from './textInput.css';

export default class TextInput extends Component {

	render() {

		const {value, id} = this.props;
		const {onChange, onBlur} = this.props;

		return (
		
			<input
				className={styles.textInput}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				id={id} 
			/>
			
		)

	}

}