import React, {Component, PropTypes} from 'react';
import WineBody from './WineContentBody';
import WineComment from './WineContentComment';

export default class WineContent extends Component {

	render() {

		const {_id, description, comments} = this.props;
		const {wineDelete, wineComment, wineCommentDelete} = this.props;

		return (

			<div>
				<WineBody 
					_id={_id}
					description={description}
					wineDelete={wineDelete}
				/>
				<WineComment 
					_id={_id}
					comments={comments}
					wineComment={wineComment}
					wineCommentDelete={wineCommentDelete}
				/>
			</div>

		)

	}

}

WineContent.propTypes = {
  _id: PropTypes.string,
  description: PropTypes.string,
  comments: PropTypes.array,
  wineDelete: PropTypes.func,
  wineComment: PropTypes.func,
  wineCommentDelete: PropTypes.func
};