import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const CustomStatusBar = ({ backgroundColor, ...props }) => {
	return (
		<View style={[ styles.statusBar, backgroundColor ]}>
			<StatusBar backgroundColor={backgroundColor} translucent barStyle="light-content" />
		</View>
	);
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT,
		backgroundColor: '#fff'
	}
});
export default CustomStatusBar;
