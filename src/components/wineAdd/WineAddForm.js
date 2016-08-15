import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {isNumeric} from 'validator';
import TextInput from '../app/textInput/TextInput'; 
import TextArea from '../app/textArea/TextArea';
import Label from '../app/label/Label';
import Error from '../app/error/Error';
import Button from '../app/button/Button';

const validate = values => {
  
	const errors = {}
  
	if (!values.title) { 

		errors.title = 'Please enter a title'; 

	} 

	if (!values.location) { 

		errors.location = 'Please enter a location'; 

	}

	if (!values.year) { 

		errors.year = 'Please enter a year'; 

	} else if (!isNumeric(values.year) || values.year.length !== 4) {

		errors.year = 'Please enter a valid year';

	}

	if (!values.description) { 

		errors.description = 'Please enter a description'; 

	}
  
	return errors

}

class WineAddForm extends Component {

	render() {

		const {fields: {image, title, location, description, year}, handleSubmit, touch, onSubmit, onBlur, invalid} = this.props;

		return (

			<div>
				<Label 
					value={'title'}
					id={'title'}
				/>
				<TextInput 
					value={title.value}
					onChange={title.onChange}
					id={'title'}
					onBlur={() => touch('title')}
				/>
				{ title.error && title.touched && <Error value={title.error} /> }
				<Label 
					value={'location'}
					id={'location'}
				/>
				<TextInput 
					value={location.value}
					onChange={location.onChange}
					id={'location'}
					onBlur={() => touch('location')}
				/>
				{ location.error && location.touched && <Error value={location.error} /> }
				<Label 
					value={'year'}
					id={'year'}
				/>
				<TextInput 
					value={year.value}
					onChange={year.onChange}
					id={'year'}
					onBlur={() => touch('year')}
				/>
				{ year.error && year.touched && <Error value={year.error} /> }
				<Label 
					value={'description'}
					id={'description'}
				/>
				<TextArea 
					value={description.value}
					onChange={description.onChange}
					id={'description'}
					onBlur={() => touch('description')}
				/>
				{ description.error && description.touched && <Error value={description.error} /> }
				<Button 
					color={'green'}
					value={'Add Wine'}
					onClick={handleSubmit}
					disabled={invalid}
				/>
			</div>

		)

	}

}

export default WineAddForm = reduxForm({ 
  form: 'wine',                           
  fields: ['image', 'title', 'location', 'description', 'year'],
  validate
})(WineAddForm);