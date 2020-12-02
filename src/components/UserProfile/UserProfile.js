import { Card, CardItem, Body, } from 'native-base';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { SECONDARY_COLOR } from '../../utils/constants';

let UserProfile  = (props) => {
    const {user} = props;
    
    return (
      <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: user?.photoUrl}}/>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>{user?.name}</Text>
                    <Text style={styles.info}>{user?.email}</Text>
                </View>
            </View>
            <View style={styles.addressCard}>
                <Card >
                    <CardItem style={styles.addressCardHeader} header>
                        <Text style={styles.addressCardHeaderText}>Manage Address</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Manage Address</Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
  header:{
    backgroundColor: SECONDARY_COLOR,
    height:75,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:20
  },
  addressCard: {
    marginTop: 40,
    marginHorizontal: 10
  },
  addressCardHeader: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF'
  },
  addressCardHeaderText: {
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: 'center',
      fontFamily: "PlayfairDisplay_500Medium"

  },

  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    fontFamily: "PlayfairDisplay_500Medium"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    fontFamily: "PlayfairDisplay_400Regular"
  },

});

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {}) (UserProfile);