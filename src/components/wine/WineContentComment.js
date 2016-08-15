import React, {Component, PropTypes} from 'react';
import Headline from '../app/headline/Headline';
import WineCommentForm from './WineContentCommentForm';
import WineCommentList from './WineContentCommentList';

export default class WineContentComment extends Component {

	render() {

		const {_id, comments} = this.props;
		const {wineComment, wineCommentDelete} = this.props;

		return (

			<div>
				<Headline 
					value={'Comments'}
					type={'h2'}
				/>
				<WineCommentList 
					comments={comments}
					wineCommentDelete={wineCommentDelete}
					_id={_id}
				/>
				<WineCommentForm 
					onSubmit={wineComment}
					initialValues={{_id}}
				/> 
			</div>

		)

	}

}

WineContentComment.propTypes = {
  _id: PropTypes.string,
  comments: PropTypes.array,
  wineComment: PropTypes.func,
  wineCommentDelete: PropTypes.func
};