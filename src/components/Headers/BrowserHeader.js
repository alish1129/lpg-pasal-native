import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BrowserHeader = ({ navigation }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
			<View style={{ flex: 1, alignItems: 'flex-start' }}>
				<TouchableOpacity
                        style={{ width: 25, paddingHorizontal: 5 }}
                        onPress={() => {
						navigation.toggleDrawer();
					}}
				>
					<Icon name="ios-menu" color="#fff" size={22} />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Text style={styles.title}>Categories</Text>
			</View>
			<View style={{ flex: 1, alignItems: 'flex-end' }} />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#fff',
		fontSize: 22,
		alignSelf: 'center'
	}
});

export default BrowserHeader;
