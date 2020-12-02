import { ADDED_TO_CART, REMOVED_FROM_CART } from '../actions/types';

const INITIAL_STATE = {
    products: [],
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADDED_TO_CART:
			return {
				...state,
				products: payload,
				loading: false
            };
        case REMOVED_FROM_CART: 
            return {
                ...state,
                productDetails: payload.productDetails,
                loading: false
            }
		default:
			return state;
    }
};
