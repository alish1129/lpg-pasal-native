import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SearchBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

const HomeHeader = ({ navigation }) => {
	const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
    const [showSearchbar, setShowSearchbar] = useState(false);

	return (
		<View
			style={{
                flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}
		>   
            <>
                <View>
                    <TouchableOpacity
                        style={{ width: 25, paddingHorizontal: 5 }}
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    >
                        <Icon name="ios-menu" color="#fff" size={22} />
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.searchBarContainer}>
                    <Searchbar style={styles.searchBar} />
                </View> */}
                <View >
                    <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {setShowSearchbar(true)}}>
                        <Icon name="ios-search" color="#fff" size={22} />
                    </TouchableOpacity>
                </View>
            </>
			
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#fff',
		fontSize: 22
    },
    searchBarContainer: {
        width: '100%'
    },
    searchBar: {
        width: '80%',
        height: '90%'
    }
});

export default HomeHeader;
