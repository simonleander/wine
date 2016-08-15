'use strict';

import * as types from '../actions/actions.types';

const initialState = {
	sort: 'all',
	search: '',
	showSearch: false,
	wineSelected: {},
	wineCollected: [
		{
			_id: '02',
			title: 'second wine',
			location: 'Edmeades Vineyards - Mendocino County, USA',
			description: 'Det er en generøs vin med stor frugt og letkrydret bouquet af mørke kirsebær. Tilsætningen af Petite Sirah og Syrah giver en dejlig landlig fornemmelse med jordede overtoner og god struktur. Vinen er lagret 10 måneder på franske og amerikanske fade, hvoraf ca. 1/4 er nye. Endnu er vinen domineret af den modne frugt, men over tid vil den blive mere intens og kompleks med en velintegreret fadkarakter.',
			thumb: '../wine01.jpg',
			image: '../wine01.jpg',
			url: 'second_wine',
			rating: 1,
			comments: [],
			year: 1984
		},
		{
			_id: '03',
			title: 'third wine',
			location: 'Edmeades Vineyards - Mendocino County, USA',
			description: 'Det er en generøs vin med stor frugt og letkrydret bouquet af mørke kirsebær. Tilsætningen af Petite Sirah og Syrah giver en dejlig landlig fornemmelse med jordede overtoner og god struktur. Vinen er lagret 10 måneder på franske og amerikanske fade, hvoraf ca. 1/4 er nye. Endnu er vinen domineret af den modne frugt, men over tid vil den blive mere intens og kompleks med en velintegreret fadkarakter.',
			thumb: '../wine01.jpg',
			image: '../wine01.jpg',
			url: 'third_wine',
			rating: 2,
			comments: [],
			year: 2015
		}
	]
};

export default function wine(state = initialState, action = {}) {
  
	switch (action.type) {

		case types.WINE_ADD:

			return { 
				...state, 
				wineCollected: [
					...state.wineCollected, 
					action.wine
				] 
			};

		case types.WINE_COMMENT:

			return {
				...state, 
				wineCollected: state.wineCollected.map((wine) => {

					if (wine._id === action._id) {

						return {
							...wine,
							comments: [ 
								...wine.comments, 
								action.comment 
							]
						}

					}

					return wine;

				}),
				wineSelected: { 
					...state.wineSelected, 
					comments: [ 
						...state.wineSelected.comments, 
						action.comment 
					] 
				}
			}

		case types.WINE_COMMENT_DELETE:

			return {
				...state,
				wineCollected : state.wineCollected.map((wine) => {
					
					if (wine._id === action.wineId) {

						return {
							...wine, 
							comments: wine.comments.filter((comment) => comment._id !== action.commentId)
						}

					}

					return wine;

				}),
				wineSelected: { 
					...state.wineSelected,
					comments: state.wineSelected.comments.filter((comment) => comment._id !== action.commentId)
				}
			}

		case types.WINE_DELETE:

			return { 
				...state, 
				wineCollected: state.wineCollected.filter((item) => item._id !== action._id),
				wineSelected: {}
			}

		case types.WINE_GET_ONE:

			let wineSelected = null;
		
			state.wineCollected.forEach((wine) => {

				if (wine.url == action.url) {

			 		wineSelected = wine;

			 	}

			});

			return { ...state, wineSelected: wineSelected };

		case types.WINE_RATE:

			return {
				...state, 
				wineCollected : state.wineCollected.map((wine) => {

					if (wine._id === action._id) {

						return { 
							...wine, 
							rating: action.rating 
						}

					}

					return wine;

				}),
				wineSelected: {
					...state.wineSelected, 
					rating: action.rating
				}
			}

		case types.WINE_SEARCH:

			return {
				...state, 
				search: action.search
			};

		case types.WINE_SEARCH_TOGGLE:

			return {
				...state,
				search: '', 
				showSearch: !state.showSearch
			};


		case types.WINE_SORT:

			return {
				...state, 
				sort: action.sort
			};

		default:
		  
		  return state;

	}

}