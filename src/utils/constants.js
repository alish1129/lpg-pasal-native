import { StatusBar, Platform, StyleSheet } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const HeaderStyles = { height: 60 };

export const BASE_URL = 'https://lpg-pasal-backend.herokuapp.com/api';
export const PRIMARY_COLOR = '#003893';
export const SECONDARY_COLOR = '#DC143C';
export const TRENARY_COLOR = '#009387';

export const STATUSBAR_STYLE = StyleSheet.create({
	height: STATUSBAR_HEIGHT
});

export const CURRENCY = 'Rs. ';

export const ANDROID_CLIENT_ID = "787365272519-au0lg3mps6mhbov6gtmkbpg1c14f1fvs.apps.googleusercontent.com";
export const IOS_CLIENT_ID = "787365272519-iegd7acggi3f551smqb6gsn1b711nbr5.apps.googleusercontent.com";