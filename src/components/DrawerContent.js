import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../utils/constants';
import { connect } from 'react-redux';

import { logout } from '../store/actions/auth';

const DrawerContent = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					{!props.isAuth ? (
						<View />
					) : (
						<View style={styles.userInfoSection}>
							<View style={{ flexDirection: 'row', marginTop: 15 }}>
								<Avatar.Image
									source={{
										uri:
											props.user.photoUrl
									}}
									size={50}
								/>
								<View style={{ marginLeft: 15, flexDirection: 'column' }}>
									<Title style={styles.title}>{props.user.name}</Title>
									<Caption style={styles.caption}>{props.user.email}</Caption>
								</View>
							</View>
							<Caption style={styles.caption}>{}</Caption>
						</View>
					)}

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ size, color }) => <Icon color={color} name="ios-home" size={size} />}
							label="Home"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({ size, color }) => <Icon color={color} name="ios-albums" size={size} />}
							label="Browse"
							onPress={() => {
								props.navigation.navigate('Browse');
							}}
						/>
						<DrawerItem
							icon={({ size, color }) => <Icon color={color} name="ios-navigate" size={size} />}
							label="Manage Address"
							onPress={() => {}}
						/>
						<DrawerItem
							icon={({ size, color }) => <Icon color={color} name="ios-settings" size={size} />}
							label="Settings"
							onPress={() => {
								props.navigation.navigate('Profile');
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				{props.isAuth ? (
					<DrawerItem
						icon={({ size, color }) => <Icon color={color} name="ios-exit" size={size} />}
						label="Sign Out"
						onPress={() => {
							console.log('signout pressed');
							props.logout();
						}}
					/>
				) : (
					<DrawerItem
						icon={({ size, color }) => <Icon color={color} name="ios-exit" size={size} />}
						label="Sign In"
						onPress={() => {
							props.navigation.navigate('Login');
						}}
					/>
				)}
			</Drawer.Section>
		</View>
	);
};

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1
	},
	userInfoSection: {
		paddingLeft: 20
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold'
	},
	caption: {
		fontSize: 14,
		lineHeight: 14
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3
	},
	drawerSection: {
		marginTop: 15
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16
	}
});

const mapStateToProps = (state) => ({
	user: state.auth.user,
	isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(DrawerContent);
