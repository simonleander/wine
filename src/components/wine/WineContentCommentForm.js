import React, {Component, PropTypes} from 'react';
import TextArea from '../app/textArea/TextArea';
import Button from '../app/button/Button';
import {reduxForm} from 'redux-form';

const validate = values => {
  
  const errors = {}
  
  if (!values.comment) {
    
    errors.comment = true;
  
  } 
  
  return errors

}

class WineContentCommentForm extends Component {

	render() {

		const {fields: {_id, comment}, handleSubmit, onSubmit, invalid} = this.props;

		return (

			<div>
				<form>
					<TextArea 
						value={comment.value}
						onChange={comment.onChange}
						id={'comment'}
					/>
					<Button
						type={'button'} 
						value={'add comment'}
						color={'green'}
						onClick={handleSubmit}
						disabled={invalid}
					/>
				</form>
			</div>

		)

	}

}

export default WineContentCommentForm = reduxForm({ 
  form: 'comment',                           
  fields: ['_id', 'comment'],
  validate
})(WineContentCommentForm);