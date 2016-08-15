import React, {Component, PropTypes} from 'react';
import Label from '../label/Label';
import styles from './selectInput.css';

export default class SelectInput extends Component {

	render() {

		const {options, label, id, value} = this.props;
		const {onChange} = this.props;

		return (
			
			<div>
				<Label 
					id={id}	
					value={label}
				/>
				<div className={styles.selectWrapper}>
					<select 
						className={styles.selectInput}
						id={id}
						name={id}
						value={value}
						onChange={(event) => onChange({sort: event.target.value})}>
						{
							options.map((option, index) => {
								return ( 
									<option 
										key={index}
										value={option.toLowerCase()}>
										{option}
									</option>
								)
							})
						}
					</select>
					<div className={styles.arrow}>
						<i 
							className="fa fa-chevron-down" 
							aria-hidden="true">
						</i>
					</div>
				</div>
			</div>
				
		)

	}

}

SelectInput.propTypes = {
	options: PropTypes.array.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}