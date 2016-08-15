import React, {Component, PropTypes} from 'react';
import HeaderSearchList from './HeaderSearchList';
import TextInput from '../../app/textInput/TextInput';
import styles from './headerSearch.css';

export default class HeaderSearch extends React.Component {

	render() {

		const {wines} = this.props;
		const {wineSearch, wineSearchToggle} = this.props;

		return (

			<div className={styles.headerSearch}>
				<TextInput 
					onChange={event => wineSearch({search: event.target.value})}
				/>
				<HeaderSearchList 
					wineSearchToggle={wineSearchToggle}
					wines={wines}
				/>
			</div>

		)

	}

}

HeaderSearch.propTypes = {
	wines: PropTypes.array.isRequired,
	wineSearch: PropTypes.func.isRequired,
	wineSearchToggle: PropTypes.func.isRequired
}