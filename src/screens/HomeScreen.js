import React, { useState } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ProductList from '../components/ProductList';
import Icon from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../utils/constants';
import { Header, Container, Left, Button, Body, Right, Fab } from 'native-base';
import { StatusBar, StyleSheet } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import { SafeAreaView } from 'react-navigation';
import { FAB } from 'react-native-paper';
import FavoriteList from '../components/FavoriteList';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{backgroundColor: '#fff'}}>
            <ScrollView>

                <ProductList navigation={navigation} />
                <FavoriteList navigation={navigation} />
            </ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
