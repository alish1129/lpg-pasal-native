import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";
import { BASE_URL, CURRENCY, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 

const CartItemList = (props) => {
    const {product, navigation} = props;
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={()=> {}} >
            <Card borderRadius={25} style={{margin: 0, padding: 0}}>
                <Card.Content style={{margin: 0, padding: 0}}>
                    <Grid style={{margin: 0, padding: 0}}>
                        <Col size={1}>
                            <View>
                                <Image  style={styles.image}
                                    resizeMode="contain" 
                                    source={{ uri: `${BASE_URL}/product/images/${product._id}` }}
                                />
                            </View>
                        </Col>
                        <Col size={2}>
                            <Row>
                                <Text>{product.name}</Text>
                            </Row>
                            <Row>
                                <Text>{CURRENCY + product.price}</Text>
                            </Row>
                        </Col>
                        <Col size={1} >
                            <Row style={{justifyContent: 'flex-end'}}>
                                <TouchableOpacity>
                                    <Entypo name="circle-with-plus" size={24} color={PRIMARY_COLOR} />
                                </TouchableOpacity>
                            </Row>
                            <Row style={{justifyContent: 'flex-end' }}>
                                <Text style={{textAlign: "center", justifyContent: 'center'}}>1</Text>
                            </Row>
                            <Row style={{justifyContent: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Entypo name="circle-with-minus" size={24} color={SECONDARY_COLOR} />
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    itemContainer: {
        margin: 5,
        padding: 0
    }
})

export default CartItemList;