import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlayfairDisplay_500Medium } from '@expo-google-fonts/playfair-display';

const ProfileHeader = ({ navigation }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
			<View>
				<TouchableOpacity
                        style={{ width: 25, paddingHorizontal: 5 }}
                        onPress={() => {
						navigation.toggleDrawer();
					}}
				>
					<Ionicons name="ios-menu" color="#fff" size={22} />
				</TouchableOpacity>
			</View>
			<View style={{alignItems: 'center'}}>
				<Text style={styles.title}>Hello,</Text>
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
		fontSize: 30,
        alignSelf: 'center',
        fontFamily: "PlayfairDisplay_500Medium"
	}
});

export default ProfileHeader;
