import React, {Component} from 'react';
import {Link} from 'react-router';
import Rating from '../app/rating/Rating';
import Image from '../app/image/Image';
import styles from './winesList.css';

export default class WinesList extends Component {

	render() {

		const {wines} = this.props;

		return (

			<ul>
				{wines.map((wine, index) => 

					<li key={index} className={styles.wine}>
						<Link 
							className={styles.link} 
							to={`/wine/${wine.url}`}>
							<div className={styles.thumb}>
								<Image src={wine.thumb} />
							</div>
							<div className={styles.itemText}>
								<div className={styles.title}>
									{wine.title}
								</div>
								<div className={styles.location}>
									{wine.location}
								</div>
								<div className={styles.year}>
									{wine.year}
								</div>
								<Rating 
									rating={wine.rating}
									max={5}
									color={'green'}
								/>
							</div>
						</Link>
					</li>

				)}
			</ul>

		)

	}

}