import React, {Component, PropTypes} from 'react';
import Headline from '../app/headline/Headline';
import Rating from '../app/rating/Rating';
import styles from './wineHeader.css';

export default class WineHeader extends Component {

	render() {

		const {_id, title, location, rating, year} = this.props;
		const {wineRate} = this.props;

		return (
			
			<div className={styles.wineHeader}>
				<div className={styles.title}>
					<h1>{title}</h1>
				</div>
				<div className={styles.location}>
					{location}
				</div>
				<div className={styles.year}>
					{year}
				</div>
				<Rating 
					rating={rating}
					max={5}
					onClick={wineRate}
					_id={_id}
				/>
			</div>	
		
		)

	}

}