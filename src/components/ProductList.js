import React, { useEffect, useState } from 'react';
import { Text, View, RefreshControl, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getAllProducts } from '../store/actions/product';
import { BASE_URL, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants';
import ProductItem from './ProductItem';
import { PlayfairDisplay_500Medium } from '@expo-google-fonts/playfair-display';


const numColumns = 1;

const ProductList = (props) => {
	const [ refreshing, setRefreshing ] = useState(false);

	useEffect(() => {
		// Update the document title using the browser API
		props.getAllProducts('createdAt', 'desc', 10);
	}, []);

	renderItem = ({ item }) => {
		if (item.empty === true) {
			return <View style={[ styles.item, styles.itemInvisible ]} />;
		}
		return <View style={styles.item}></View>;
	};

	const refreshData = () => {
		setRefreshing(true);
		try {
			props.getAllProducts('createdAt', 'desc', 10).then(() => {
				setRefreshing(false);
			});
		} catch (err) {
			console.log(err);
		}
	};

    return (
        <>                    
        <View style={styles.header}>
            <Text style={styles.categoryTitle}>Most Popular</Text> 
        </View>
        <FlatList
            style={styles.container}
            // data={formatData(props.products, numColumns)}
            data={props.products}
            numColumns={numColumns}
            keyExtractor={item => item._id}
            renderItem={itemData => (
                <ProductItem
                    key={itemData.item._id}
                    item={itemData.item}
                    {...props}
                />
            )}
            horizontal
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshData} />}
        />
        </>
	);
};

const styles = StyleSheet.create({
	container: {
        borderColor: '#fff',
        borderTopLeftRadius: 50,
        backgroundColor: '#fff'
    },
    
    header:{
        backgroundColor: SECONDARY_COLOR,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        borderBottomRightRadius: 50,
        height: 40,
        textAlign: 'center',
        alignItems: 'center'
      },
    categoryTitle: {
        fontFamily: "PlayfairDisplay_500Medium",
        fontSize: 22,
        color: '#fff'
    },
	item: {
		justifyContent: 'center',
		flex: 1,
	},
	itemInvisible: {
		backgroundColor: 'transparent'
	},
	itemText: {
		color: '#fff'
	},
	price: {
		marginTop: 5,
		flexDirection: 'column',
		fontSize: 12,
		color: PRIMARY_COLOR
	}
});

const formatData = (data, numOfColumns) => {
	const numberofRows = Math.floor(data.length / numOfColumns);

	let numberOfElementsLastRow = data.length - numberofRows * numOfColumns;
	while (numberOfElementsLastRow !== numOfColumns) {
		data.push({ _id: `blank-${numberOfElementsLastRow}`, empty: true });
		numberOfElementsLastRow = numberOfElementsLastRow + 1;
	}

	return data;
};

const mapStateToProps = (state) => ({
	products: state.products.products,
	loading: state.products.loading
});

export default connect(mapStateToProps, { getAllProducts })(ProductList);
