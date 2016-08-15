import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/wine.actions';
import Image from '../app/image/Image';
import WineHeader from './WineHeader';
import WineContent from './WineContent';

class Wine extends Component {

	componentWillMount() {

		const {wineGetOne} = this.props.actions;
		const {url} = this.props.params;

		wineGetOne({url});

	}
	render() {

		const {wine} = this.props.state;
		const {wineDelete, wineRate, wineComment, wineCommentDelete} = this.props.actions;

		return (

			<div >
				<Image 
					src={wine.image}
				/>
				<WineHeader 
					_id={wine._id}
					title={wine.title}
					location={wine.location}
					rating={wine.rating}
					year={wine.year}
					wineRate={wineRate}
				/>
				<WineContent 
					_id={wine._id}
					description={wine.description}
					comments={wine.comments}
					wineDelete={wineDelete}
					wineComment={wineComment}
					wineCommentDelete={wineCommentDelete}
				/>
			</div>

		)

	}

}

export default connect(state => ({state: {wine: state.wine.wineSelected}}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(Wine);