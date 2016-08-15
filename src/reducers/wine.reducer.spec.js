'use strict';

import {expect} from 'chai';
import deepFreeze from 'deep-freeze';
import reducer from './wine.reducer.js';

describe('The wine reducer', () => {

	describe('The WINE_ADD action', () => { 

		it('Should add a new wine to the collection', () => { 

			const stateBefore = {
				wineCollected: [
					{
						_id: '01',
						title: 'the first wine',
						location: 'the first location',
						description: 'the first description',
						thumb: '../wine01.jpg',
						image: '../wine01.jpg',
						url: 'the_first_wine',
						comments: [],
						rating: 2,
						year: 2011

					}
				]
			};

			const stateAfter = {
				wineCollected: [
					{
						_id: '01',
						title: 'the first wine',
						location: 'the first location',
						description: 'the first description',
						thumb: '../wine01.jpg',
						image: '../wine01.jpg',
						url: 'the_first_wine',
						comments: [],
						rating: 2,
						year: 2011

					},
					{
						_id: '02',
						title: 'the second wine',
						location: 'From some other place',
						description: 'some other description',
						thumb: '../wine02.jpg',
						image: '../wine02.jpg',
						url: 'second_wine',
						comments: [],
						rating: 4,
						year: 2014

					}
				]
			};

			const action = {
				type: 'WINE_ADD',
				wine: {
					_id: '02',
					title: 'the second wine',
					location: 'From some other place',
					description: 'some other description',
					thumb: '../wine02.jpg',
					image: '../wine02.jpg',
					url: 'second_wine',
					comments: [],
					rating: 4,
					year: 2014
				}
			};

			deepFreeze(stateBefore);

			expect(reducer(stateBefore, action)).to.deep.equal(stateAfter);

		});

	});

});