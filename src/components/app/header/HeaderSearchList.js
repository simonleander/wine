import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Image from '../image/Image';
import styles from './headerSearchList.css';

export default class HeaderSearchList extends Component {

	render() {

		const {wines} = this.props;
		const {wineSearchToggle} = this.props;

		return (

			<ul className={styles.headerSearchList}>
				{
					wines.map((wine, index) => {

						return (

							<li 
								key={index}
								onClick={wineSearchToggle}>
								<Link 
									className={styles.link} 
									to={`/wine/${wine.url}`}>
									<div className={styles.thumb}>
										<Image src={wine.thumb} />
									</div>
									<div className={styles.title}>
										{wine.title}
									</div>
								</Link>
							</li>

						)

					})
				}
			</ul>

		)

	}

}

HeaderSearchList.propTypes = {
	wines: PropTypes.array.isRequired,
	wineSearchToggle: PropTypes.func.isRequired
}