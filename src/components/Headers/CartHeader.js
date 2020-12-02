import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartHeader = ({ navigation }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}  >
            <View></View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>My Cart</Text>
                </View>
			<View></View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#fff',
		fontSize: 20,
        alignSelf: 'center',
        fontFamily: "PlayfairDisplay_500Medium"
	}
});

export default CartHeader;
