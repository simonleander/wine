import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './button.css';

export default class Button extends Component {

	shouldComponentUpdate(nextProps) {

		return this.props.disabled !== nextProps.disabled;

	}
	render() {

		const {onClick, value, disabled, color = 'green'} = this.props;
		const classes = classNames(styles.button, styles[color]);

		return (

			<button 
				className={classes}
				type="text"
				onClick={onClick}
				disabled={disabled}
			>{value}</button>

		)

	}

}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
  	color: PropTypes.string,
	disabled: PropTypes.bool
}