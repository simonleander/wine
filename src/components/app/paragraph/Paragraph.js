import React, {Component, PropTypes} from 'react';
import styles from './paragraph.css';

export default class Paragraph extends Component {

	render() {

		const {content} = this.props;

		return (

			<p className={styles.paragraph}>{content}</p>

		)

	}

}