import http from '../../utils/http';
import { GET_ALL_PRODUCTS, PRODUCT_BY_ID_SUCCESS } from './types';

export const getAllProducts = (sortBy = '_id', order = 'desc', limit = 5) => async (dispatch) => {
	return await http
		.get('/products', {
			params: {
				sortBy,
				order,
				limit
			}
		})
		.then((res) => res.data)
		.then((result) => {
			dispatch({ type: GET_ALL_PRODUCTS, payload: result });
			return result;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getProductById = (productId) => async dispatch => {
    return await http.get(`/product/${productId}`).then((res) => res.data).then((result) => {
        dispatch({type: PRODUCT_BY_ID_SUCCESS, payload: {productDetails: result}});
        return result;
    })
    .catch (err => err)
}