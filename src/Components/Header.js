import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> Albums </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: 'red'
	},
	textStyle: {
		fontSize: 25,
		textAlign: 'center',
		color: 'white'
	}
};

export default Header;
