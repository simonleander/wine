'use strict';

import {v4} from 'node-uuid';
import {browserHistory} from 'react-router';
import {getTimestamp} from '../helpers/functions';
import * as types from './actions.types';

export const wineGetOne = (payload) => {

	return {
		type: 'WINE_GET_ONE',
		url: payload.url
	}

}

export const wineAdd = (payload) => {

	browserHistory.push('/wines');

	return {
		type: 'WINE_ADD',
		wine: {
			_id: v4(),
			title: payload.title.toLowerCase(),
			location: payload.location.toLowerCase(),
			description: payload.description,
			image: '../wine01.jpg',
			thumb: '../wine01.jpg',
			url: payload.title,
			year: payload.year,
			rating: 0,
			comments: []
		}
	
	}

}

export const wineDelete = (payload) => {

	browserHistory.push('/wines');

	return {
		type: 'WINE_DELETE',
		_id: payload._id
	}

}

export const wineRate = (payload) => {
	
	return {
		type: 'WINE_RATE',
		_id: payload._id,
		rating: payload.rating
	}

}

export const wineComment = (payload) => {

	return {
		type: 'WINE_COMMENT',
		_id: payload._id,
		comment: {
			_id: v4(),
			value: payload.comment,
			timestamp: getTimestamp()
		}
	}

}

export const wineCommentDelete = (payload) => {

	return {
		type: 'WINE_COMMENT_DELETE',
		wineId: payload.wineId,
		commentId: payload.commentId
	}

}

export const wineSort = (payload) => {

	return {
		type: 'WINE_SORT',
		sort: payload.sort
	}

}

export const wineSearch = (payload) => {

	return {
		type: 'WINE_SEARCH',
		search: payload.search.toLowerCase()
	}

}

export const wineSearchToggle = () => {

	return {
		type: 'WINE_SEARCH_TOGGLE',
	}

}