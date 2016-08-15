import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './rating.css';

export default class Rating extends Component {

	renderStars(amount) {

		const {_id} = this.props;
		const {onClick} = this.props;

		let stars = [];

		for (let i = 0; i < amount; i++) {

			stars.push(
				<i 
					className="fa fa-star"
					aria-hidden="true"
					key={i}
					onClick={() => onClick({_id, rating: i + 1})}>
				</i>
			);

		}

		return stars;

	}
	render() {

		const {max, rating, color} = this.props;

		const classes = classNames(styles.stars, styles[color]);

		return (

			<div className={styles.rating}>
				<div className={styles.maxStars}>
					{ this.renderStars(max) }
				</div>
				<div className={classes}>
					{ this.renderStars(rating) }
				</div>
			</div>

		)

	}

}