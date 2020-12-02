import React from 'react';
import { Badge, Chip } from 'react-native-paper';
import { Dimensions, Text } from 'react-native';

export const getOrderStatus = (orderStatus) => {
	switch (orderStatus) {
		case 0:
			return (
				<Chip style={{ backgroundColor: '#fccb05', width: 100 }}>
					<Text>Pending</Text>
				</Chip>
			);
		case 1:
			return (
				<Chip style={{ backgroundColor: '#72cdfa' }}>
					<Text>In Transit</Text>
				</Chip>
			);
		case 2:
			return (
				<Chip style={{ backgroundColor: '#bddf57' }}>
					<Text>Completed</Text>
				</Chip>
			);
		case 3:
			return (
				<Chip style={{ backgroundColor: '#879193' }}>
					<Text>Cancelled</Text>
				</Chip>
			);
		default:
			return (
				<Chip style={{ backgroundColor: '#879193' }}>
					<Text>Not Available</Text>
				</Chip>
			);
	}
};

export const widthInPercentage = (per) => {
	const width = Dimensions.get('window').width;

	return width * (per / 100);
};
export const heightInPercentage = (per) => {
	const height = Dimensions.get('window').height;

	return height * (per / 100);
};
