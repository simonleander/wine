import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/wine.actions';
import Headline from '../app/headline/Headline';
import WineAddForm from './WineAddForm';

class WineAdd extends Component {

	render() {

		const {wineAdd} = this.props.actions;

		return (

			<div>
				<Headline 
					value={'Add Wine'}
					type={'h1'}
				/>
				<WineAddForm 
					onSubmit={wineAdd}
				/>
			</div>

		)

	}

}

export default connect(state => ({state: {}}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(WineAdd);