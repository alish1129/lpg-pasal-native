import React, { useEffect, useState } from 'react';
import { Text, StatusBar, View, Image, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { getAllCategories } from '../store/actions/category';
import { Header, Body, Container, Left, Right, Card, CardItem } from 'native-base';
import { PRIMARY_COLOR, SECONDARY_COLOR, BASE_URL } from '../utils/constants';
import { SafeAreaView } from 'react-navigation';
import { FlatGrid } from 'react-native-super-grid';
import { heightInPercentage, widthInPercentage } from '../utils/helpers';

const BrowseScreen = (props) => {
	useEffect(() => {
		// Update the document title using the browser API
		props.getAllCategories();
	}, []);

	const CategoryListComponent = () => {
		return (
			<FlatGrid
				data={props.categories}
				itemDimension={widthInPercentage(90)}
				renderItem={({ item }) => {
					return <CategoriesItem key={item._id} category={item} />;
				}}
			/>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<CategoryListComponent />
		</SafeAreaView>
	);
};

const CategoriesItem = ({ category }) => {
	return category ? (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: '#fff',
					height: heightInPercentage(30)
				}}
			>
				<ImageBackground
					source={{ uri: `${BASE_URL}/category/images/${category._id}` }}
					style={{
						width: '100%',
						height: heightInPercentage(30)
					}}
					imageStyle={{
						height: heightInPercentage(30),
						resizeMode: 'contain'
					}}
				>
					<View style={styles.overlay}>
						<Text style={styles.title}>{category.name.toUpperCase()}</Text>
					</View>
				</ImageBackground>
			</View>
		</View>
	) : (
		<Card key={'noitem'}>
			<Body>
				<Text>NO ITEMS FOUND</Text>
			</Body>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	categories: state.categories.categories
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		shadowColor: 'rgba(1,1,1,0.5)',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 5,
		shadowOpacity: 1.0,
        height: heightInPercentage(30),
        backgroundColor: '#fff'
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32,
		color: '#fff',
		fontWeight: 'bold',
		letterSpacing: 8,
		alignSelf: 'center',
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'rgba(1,1,1,0.5)'
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		height: '100%',
		justifyContent: 'center'
	}
});

export default connect(mapStateToProps, { getAllCategories })(BrowseScreen);
