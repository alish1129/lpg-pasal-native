import { SHOW_LOADER, SHOW_SIGNIN_MODAL, HIDE_SIGNIN_MODAL } from './types';

export const setAlert = (message, type) => async (dispatch) => {
	dispatch();
};

export const showLoader = () => async (dispatch) => {
	dispatch({ type: SHOW_LOADER });
};
export const hideLoader = () => async (dispatch) => {
	dispatch({ type: HIDE_LOADER });
};

export const showSignInModal = () => async (dispatch) => {
	dispatch({ type: SHOW_SIGNIN_MODAL });
};
export const hideSignInModal = () => async (dispatch) => {
	dispatch({ type: HIDE_SIGNIN_MODAL });
};
