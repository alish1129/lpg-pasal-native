import React from 'react';
import { HeaderOptions } from '../utils/constants';
import BrowseScreen from '../screens/BrowseScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from '../screens/MainTabScreen';
import DrawerContent from '../components/DrawerContent';

const Stack = createStackNavigator();

export const BrowseNavigator = () => (
	<Stack.Navigator screenOptions={HeaderOptions}>
		<Stack.Screen name="BrowseScreen" component={BrowseScreen} />
	</Stack.Navigator>
);

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
	<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
		<Drawer.Screen name="MainTab" component={MainTabScreen} />
	</Drawer.Navigator>
);
