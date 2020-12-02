import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import { PRIMARY_COLOR, SECONDARY_COLOR, TRENARY_COLOR, HeaderStyles } from '../utils/constants';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import HomeHeader from '../components/Headers/HomeHeader';
import DetailsHeader from '../components/Headers/DetailsHeader';
import BrowserHeader from '../components/Headers/BrowserHeader';
import { View, Text, StatusBar } from 'react-native';
import ProfileHeader from '../components/Headers/ProfileHeader';
import LoginScreen from './LoginScreen';
import ProductDetailScreen from './ProductDetailScreen';
import CartHeader from '../components/Headers/CartHeader';

const MainTabNavigator = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = ({ navigation }) => {
	return (
		<MainTabNavigator.Navigator initialRouteName="Home" activeColor="#fff" shifting={true}>
			<MainTabNavigator.Screen
				name="Home"
				component={HomeStackScreen}
				options={() => ({
					tabBarLabel: 'Home',
					tabBarColor: SECONDARY_COLOR,
					tabBarIcon: ({ color }) => (
						<Icon style={[ { color: color } ]} name="ios-home" size={25} color={color} />
					)
				})}
			/>
			<MainTabNavigator.Screen
				name="Browse"
				component={BrowseStackScreen}
				options={{
					tabBarLabel: 'Browse',
					tabBarColor: SECONDARY_COLOR,
					tabBarIcon: ({ color }) => (
						<Icon style={[ { color: color } ]} name="ios-albums" size={25} color={color} />
					)
				}}
			/>
			<MainTabNavigator.Screen
				name="Profile"
				component={ProfileStackScreen}
				options={{
					tabBarColor: SECONDARY_COLOR,
					tabBarIcon: ({ color }) => (
						<Icon style={[ { color: color } ]} name="ios-person" size={25} color={color} />
					)
				}}
			/>
		</MainTabNavigator.Navigator>
	);
};

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator initialRouteName="Home">
		<HomeStack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerTitle: () => <HomeHeader navigation={navigation} />,
				headerStyle: { backgroundColor: SECONDARY_COLOR,  elevation: 0, shadowOpacity: 0  }
			}}
		/>
		<HomeStack.Screen name="Cart" component={CartScreen} options={{
                headerTitle: () => <CartHeader navigation={navigation} />,
                headerStyle: { backgroundColor: SECONDARY_COLOR,  elevation: 0, shadowOpacity: 0  },
                headerTintColor: '#fff',
            }}
        />
		<HomeStack.Screen
			name="Details"
			component={ProductDetailScreen}
			options={{
                headerStyle: { backgroundColor: SECONDARY_COLOR },
                headerTintColor: '#fff',
                
			}}
		/>
		<HomeStack.Screen
			name="Login"
			component={LoginScreen}
			options={{
				headerStyle: { backgroundColor: SECONDARY_COLOR }
			}}
		/>
	</HomeStack.Navigator>
);

HomeStackScreen.navigationOptions = ({ navigation }) => {};

const BrowseStackScreen = ({ navigation }) => (
	<BrowseStack.Navigator>
		<BrowseStack.Screen
			name="Browse"
			component={BrowseScreen}
			options={{
				headerTitle: () => <BrowserHeader navigation={navigation} />,
				headerTintColor: '#fff',

				headerStyle: { backgroundColor: SECONDARY_COLOR }
			}}
		/>
	</BrowseStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
	<ProfileStack.Navigator screenOptions={{}}>
		<ProfileStack.Screen
			name="Profile"
			component={ProfileScreen}
			options={{
				headerTitle: () => <ProfileHeader navigation={navigation} />,
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: SECONDARY_COLOR,  elevation: 0, shadowOpacity: 0, }
			}}
		/>
		<ProfileStack.Screen
			name="Login"
			component={LoginScreen}
			options={{
				headerStyle: { backgroundColor: SECONDARY_COLOR }
			}}
		/>
	</ProfileStack.Navigator>
);

export default MainTabScreen;
