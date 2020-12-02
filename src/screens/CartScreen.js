import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CartItemList from '../components/CartItemList';
import { SECONDARY_COLOR } from '../utils/constants';

const CartScreen = (props) => {

    const productList = [
        {
            "sold": 0,
            "_id": "5f3e0d5747f819452e940c2c",
            "name": "Rijalko Gas - Refill",
            "description": "Refill Rijalko Gas",
            "category": "5f3e0ca693ab35fa552c59c9",
            "shipping": true,
            "quantity": 10,
            "price": 1500,
            "shippingCharge": 30,
            "weight": 15,
            "createdAt": "2020-08-20T05:42:47.924Z",
            "updatedAt": "2020-08-21T03:06:30.513Z",
            "__v": 0
        },
        {
            "sold": 0,
            "_id": "5f3e0dd447f819452e940c2d",
            "name": "Nepal Gas - Refill",
            "description": "Refill Nepal Gas",
            "category": "5f3e0ca693ab35fa552c59c9",
            "shipping": true,
            "quantity": 10,
            "price": 1500,
            "shippingCharge": 30,
            "weight": 15,
            "createdAt": "2020-08-20T05:44:52.763Z",
            "updatedAt": "2020-08-21T03:08:10.478Z",
            "__v": 0
        },
    ]

    const viewItems = () => {
        return productList.map((product) => {
            return <CartItemList key={product._id} product={product} {...props} />
        })
    }

	return (
		<SafeAreaView style={{backgroundColor: SECONDARY_COLOR}}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.cartContainer}>
                        {viewItems()}
                    </View>
                </View>
            </ScrollView>
		</SafeAreaView>
	);
};



const styles = StyleSheet.create({
    cartContainer: {
        top:0,
        left: 0,
        right:0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: 'rgb(247,247,247)',
        marginTop: 10,
        padding: 20,
        height: '100%'
    },
})

export default CartScreen;
