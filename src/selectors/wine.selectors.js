import {createSelector} from 'reselect';
import {orderBy} from 'lodash';

const getWineSort = (state) => state.wine.sort;
const getWineSearch = (state) => state.wine.search;
const getWines = (state) => state.wine.wineCollected;

export const getWinesSorted = createSelector(
	
	[getWineSort, getWines],
	(sort, wineCollected) => {

		switch(sort) {

			case 'title':

				return orderBy(wineCollected, ['title'], ['asc']);

			case 'location':

				return orderBy(wineCollected, ['location'], ['desc']);

			case 'year':

				return orderBy(wineCollected, ['year'], ['desc']);

			case 'rating':

				return orderBy(wineCollected, ['rating'], ['desc']);

			default:

				return wineCollected;

		}

	}

);

export const getWinesSearched = createSelector(
	
	[getWineSearch, getWines],
	(search, wineCollected) => {

		if (search.length > 1) {

			return wineCollected.filter((wine, index) => wine.title.indexOf(search) > -1);

		}

		return [];

	}

);