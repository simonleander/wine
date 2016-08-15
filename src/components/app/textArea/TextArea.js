import React, {Component, PropTypes} from 'react';
import Label from '../label/Label';
import styles from './textarea.css';

export default class TextArea extends Component {

	render() {

		const {value, id} = this.props;
		const {onChange, onBlur} = this.props;

		return (

			<textarea  
				className={styles.textarea}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				id={id}>
			</textarea>
			
		)

	}

}

TextArea.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func
}