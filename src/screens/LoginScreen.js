import { Text } from 'native-base';
import React from 'react';
import { View, ImageBackground, StyleSheet, Button } from 'react-native';
import image from '../../assets/image.jpg';
import {signInWithGoogle} from '../store/actions/auth';
import {connect} from 'react-redux';

const LoginScreen = (props) => {
    const {signInWithGoogle, navigation} = props;

    const onGoogleSignInPressed = () => {
        signInWithGoogle().then(res=> !res.error?navigation.push('Home'): '')
    }

	return (
		<View style={styles.container}>
			<View style={styles.hiddenHeader} />
			<ImageBackground source={image} style={styles.image} resizeMode="cover">
				<View style={styles.overlay}>
					<Button style={styles.text} onPress={() => {}} title="Sign in With Google" />
				</View>
			</ImageBackground>
		</View>
	);
};


LoginScreen.navigationOptions = {
	headerShown: false
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	hiddenHeader: {},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	overlay: {
		backgroundColor: 'rgba(255,255,255,0.3)',
		height: '100%',
		justifyContent: 'center'
	},
	text: {
		color: 'grey',
		fontSize: 30,
		fontWeight: 'bold'
	}
});

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {signInWithGoogle})(LoginScreen);
