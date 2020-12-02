import { GET_ALL_PRODUCTS, PRODUCT_BY_ID_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    products: [],
    productDetails: [],
	loading: true
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: payload,
				loading: false
            };
        case PRODUCT_BY_ID_SUCCESS: 
            return {
                ...state,
                productDetails: payload.productDetails,
                loading: false
            }
		default:
			return state;
    }
};
