import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { getProductById } from '../store/actions/product';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 

const ProductDetailScreen = (props) => {
    
    const product =  props.route.params.product;
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
    }, [])

	return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.favButton}>
                    <TouchableOpacity onPress={()=> {setIsFav(!isFav)}}>
                        {isFav? <Entypo name="heart" size={32} color="red" />: <Entypo name="heart-outlined" size={32} color="black" />}
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginHorizontal:30}}>
                    <Image 
                        style={styles.productImg}
                        resizeMode="contain"
                        source={{ uri: `${BASE_URL}/product/images/${product?._id}` }}
                    />
                    <Text style={styles.name}>{product?.name}</Text>
                    <Text style={styles.price}>$ {product?.price}</Text>
                    <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                    natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Donec quam felis, ultricies nec
                    </Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.addToCarContainer}>
                    <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
                        <Text style={styles.shareButtonText}>Add To Cart</Text>  
                    </TouchableOpacity>
                </View> 
            </ScrollView>
      </View>
	);
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff'
    },
    productImg:{
      width:200,
      height:200,
    },
    favButton: {
        flex: 1,
        flexDirection: 'row-reverse',
        padding: 10
    },
    name:{
      fontSize:28,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"#696969",
    },
    star:{
      width:40,
      height:40,
    },
    btnColor: {
      height:30,
      width:30,
      borderRadius:30,
      marginHorizontal:3
    },
    btnSize: {
      height:40,
      width:40,
      borderRadius:40,
      borderColor:'#778899',
      borderWidth:1,
      marginHorizontal:3,
      backgroundColor:'white',
  
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    starContainer:{
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentColors:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    contentSize:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20
    },
    separator:{
      height:2,
      backgroundColor:"#eeeeee",
      marginTop:20,
      marginHorizontal:30
    },
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    addToCarContainer:{
      marginHorizontal:30
    }
  });    
                         
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {getProductById}) (ProductDetailScreen);
