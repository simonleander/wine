import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/wine.actions';
import {getWinesSorted} from '../../selectors/wine.selectors';
import Headline from '../app/headline/Headline';
import SelectInput from '../app/selectInput/SelectInput';
import Button from '../app/button/Button';
import WinesList from './WinesList';

class Wines extends Component {

	render() {

		const {wines, sort} = this.props.state;
		const {wineSort} = this.props.actions;

		const options = ['Title', 'Location', 'Year', 'Rating'];

		return (

			<div>
				<Headline 
					type={'h1'}
					value={'Wine Collection'}
				/>
				<SelectInput 
					id={'sort'}
					value={sort}
					label={'sort by'}
					options={options}
					onChange={wineSort}
				/>
				<WinesList 
					wines={wines}
				/>
				<Button 
					value={'Add wine'}
					color={'green'}
					onClick={() => browserHistory.push('wine/add')}
				/>
			</div>

		)

	}

}

export default connect(state => ({state: {wines: getWinesSorted(state), sort: state.wine.sort}}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(Wines);