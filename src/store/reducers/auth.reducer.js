import { USER_SIGNED_IN, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
	isAuthenticated: false,
	loading: false,
	jwtToken: null,
	user: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case USER_SIGNED_IN:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				jwtToken: payload.token,
				user: payload.user
			};
		case LOGOUT:
			return {
				state
			};
		default:
			return state;
	}
};
