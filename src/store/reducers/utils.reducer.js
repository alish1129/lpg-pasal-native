import { SHOW_SIGNIN_MODAL, HIDE_SIGNIN_MODAL } from '../actions/types';

const INITIAL_STATE = {
	showSigninModal: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SHOW_SIGNIN_MODAL:
			return {
				...state,
				showSigninModal: true
			};
		case HIDE_SIGNIN_MODAL:
			return {
				...state,
				showSigninModal: false
			};
		default:
			return state;
	}
};
