import React, {Component, PropTypes} from 'react';
import styles from './image.css';

export default class Image extends Component {

	render() {

		const {src} = this.props;

		return (

			<img 
				className={styles.image}
				src={src} 
			/>

		)

	}

}