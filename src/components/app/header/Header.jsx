import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../actions/wine.actions';
import {getWinesSearched} from '../../../selectors/wine.selectors';
import HeaderSearch from './HeaderSearch';
import styles from './header.css';

class Header extends Component {

	render() {

		const {wines, showSearch} = this.props.state;
		const {wineSearch, wineSearchToggle} = this.props.actions;

		return (

			<div className={styles.header}>
				<div className={styles.headerInner}>
					<i 
						className="fa fa-search" 
						aria-hidden="true"
						onClick={wineSearchToggle}>
					</i>
				</div>
				{
					showSearch ? 
						<HeaderSearch 
							wineSearch={wineSearch}
							wineSearchToggle={wineSearchToggle}
							wines={wines}
						/>
					: null

				}
			</div>

		)

	}

}

export default connect(state => ({
	state: {
		wines: getWinesSearched(state),
		showSearch: state.wine.showSearch
	}}), 
	(dispatch) => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(Header);