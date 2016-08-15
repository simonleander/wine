import React, {Component, PropTypes} from 'react';
import styles from './wineContentCommentList.css';

export default class WineContentCommentList extends Component {

	render() {

		const {comments = [], _id} = this.props;
		const {wineCommentDelete} = this.props;

		return (

			<ul className={styles.wineCommentList}>
				{comments.map((comment, index) => {

					return <li key={index}>
						<div className={styles.timestamp}>
							{comment.timestamp}
							<i 
								className="fa fa-times" 
								aria-hidden="true"
								onClick={() => wineCommentDelete({
									wineId: _id,
									commentId: comment._id
								})}>
							</i>
						</div>
						<div className={styles.comment}>
							{comment.value}
						</div>
					</li>

				})}
			</ul>

		)

	}

}

WineContentCommentList.propTypes = {
  comments: PropTypes.array,
  id: PropTypes.string,
  wineDeleteComment: PropTypes.func
};