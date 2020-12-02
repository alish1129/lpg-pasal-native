import { USER_SIGNED_IN, LOGOUT } from './types';
import http from '../../utils/http';
import { ANDROID_CLIENT_ID, BASE_URL, IOS_CLIENT_ID } from '../../utils/constants';
import * as Google from 'expo-google-app-auth';

export const signIn = (email, password) => async (dispatch) => {
	return await http.post(`${BASE_URL}/signin`, { email, password }).then((res) => res.data).then((result) => {
		dispatch({ type: USER_SIGNED_IN, payload: { token: result.token, user: result.user } });
	});
};

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};

export const signInWithGoogle = () => async dispatch => {
    try {
        const result = await Google.logInAsync({
          androidClientId: ANDROID_CLIENT_ID,
          iosClientId: IOS_CLIENT_ID,
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
            const email = result.user.email;
            const fullName = result.user.name;
            const photoUrl = result.user.photoUrl;
            await http
            .post(`${BASE_URL}/continueWithGoogle`, { email, name: fullName, photoUrl })
            .then((res) => res.data)
            .then((result) => {
                dispatch({ type: USER_SIGNED_IN, payload: { token: result.token, user: result.user } });
            })
            return result.accessToken;
        } else {
            console.log('Cancelled');
            return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
}