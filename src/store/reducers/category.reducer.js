import { GET_ALL_CATEGORIES } from '../actions/types';

const INITIAL_STATE = {
	loading: true,
	categories: []
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_ALL_CATEGORIES:
			return {
				...state,
				categories: payload,
				loading: false
			};
		default:
			return state;
	}
};
