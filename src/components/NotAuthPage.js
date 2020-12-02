import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../utils/theme';
import { SECONDARY_COLOR } from '../utils/constants';

const NotAuthPage = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={{ color: COLORS.lightGray, ...FONTS.h2 }}>User currently not signed in</Text>
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate('Login');
					}}
				>
					<Text style={styles.buttonText} allowFontScaling={true}>
						Sign in
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 10,
		backgroundColor: SECONDARY_COLOR,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
});

export default NotAuthPage;
