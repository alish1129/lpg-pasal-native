import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { Card } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import { BASE_URL } from '../../utils/constants';
import { Caption, Chip } from 'react-native-paper';
import { getOrderStatus } from '../../utils/helpers';
import { signIn } from '../../store/actions/auth';
import NotAuthPage from '../NotAuthPage';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const PurchaseHistory = (props) => {
	const [ refreshing, setRefreshing ] = useState(false);

	useEffect(() => {
		if (!props.isAuth) {
			props.navigation.navigate('Login');
		}
	}, []);

	const refreshData = () => {
		setRefreshing(true);
		try {
			setRefreshing(false);
		} catch (err) {
			console.log(err);
		}
	};

	const renderHistory = () => {
		return props.user.purchase_history.length < 1 ? (
			<Card style={{ padding: 20 }}>
				<Text style={{ fontSize: 16, alignSelf: 'center' }}>No Purchase History</Text>
			</Card>
		) : (
			<FlatGrid
				data={props.user.purchase_history}
				itemDimension={width}
				renderItem={({ item }) => {
					return (
						<Card key={item._id}>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Image
									style={{ width: 100, height: 120 }}
									source={{ uri: `${BASE_URL}/product/images/${item._id}` }}
								/>
								<View style={{ padding: 10 }}>
									<Text style={styles.title}>{item.name}</Text>
									<Caption style={styles.caption}>
										<Text>Order Date: {new Date(item.date_of_purchase).toDateString()}</Text>
									</Caption>
									{getOrderStatus(item.orderStatus)}
								</View>
							</View>
						</Card>
					);
				}}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshData} />}
			/>
		);
	};

	return props.isAuth ? renderHistory() : <NotAuthPage navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		marginVertical: 8
	}
});

const mapStateToProps = (state) => ({
	user: state.auth.user,
	isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signIn })(PurchaseHistory);
