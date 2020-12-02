
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { getProductById } from '../store/actions/product';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';


const ProductItem = (props) => {
    const {item, navigation} = props;
    return (
        <TouchableOpacity key={item._id} onPress={() => navigation.navigate('Details', {product: item})}>
            <View style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} 
                                   resizeMode="contain" 
                        source={{ uri: `${BASE_URL}/product/images/${item._id}` }}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    product: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 300,
      margin: 15
    },
    imageContainer: {
      width: '100%',
      height: '70%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    details: {
      alignItems: 'center',
      height: '15%',
      padding: 10
    },
    title: {
        fontSize:18,
        color:"#696969",
        fontFamily: "PlayfairDisplay_400Regular"
    },
    price:{
        fontSize:20,
        color:"green",
        fontFamily: "PlayfairDisplay_500Medium"

      },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '25%',
      paddingHorizontal: 20
    }
  });
  
  const mapStateToProps = state => ({
    product: state.products.productDetails
    })

  export default connect(mapStateToProps, {getProductById})(ProductItem);
  