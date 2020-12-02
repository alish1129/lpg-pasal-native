import http from '../../utils/http';
import { GET_ALL_CATEGORIES } from './types';
export const getAllCategories = () => async (dispatch) => {
	return await http
		.get('/categories')
		.then((res) => res.data)
		.then((result) => dispatch({ type: GET_ALL_CATEGORIES, payload: result }));
};
