import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsHeader = (props) => {
    const {navigation} = props;
	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
			<View>
				<TouchableOpacity
					style={{ paddingHorizontal: 10 }}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Ionicons name="ios-arrow-back" color="#fff" size={22} />
				</TouchableOpacity>
			</View>
			<View>
				<Text style={styles.title}>Details</Text>
			</View>
			<View>
            <TouchableOpacity
					style={{ paddingHorizontal: 10 }}
					onPress={() => {
						navigation.toggleDrawer();
					}}
				>
                <Entypo name="dots-three-vertical" size={22} color="#fff" />				
            </TouchableOpacity>
            </View>
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

export default DetailsHeader;
