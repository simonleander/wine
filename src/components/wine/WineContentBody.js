import React, {Component, PropTypes} from 'react';
import Headline from '../app/headline/Headline';
import Paragraph from '../app/paragraph/Paragraph';
import Button from '../app/button/Button';
import styles from './wineContentBody.css';

export default class WineContentBody extends Component {

	render() {

		const {description, _id} = this.props;
		const {wineDelete} = this.props;

		return (

			<div className={styles.wineBody}>
				<Headline 
					type={'h2'}
					value={'Description'}
					align={'right'}
				/>
				<Paragraph 
					content={description}
				/>
				<Button 
					value={'Delete Wine'}
					color={'red'}
					onClick={() => wineDelete({_id})}
				/>
			</div>

		)

	}

}

WineContentBody.propTypes = {
  _id: PropTypes.string,
  description: PropTypes.string,
  wineDelete: PropTypes.func
};