import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#939393',
		justifyContent: 'center',
		borderRadius: 2,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2
	},
	textStyle: {
		fontSize: 25,
		color: 'black'
	}
});

const Header = ({ text }) => (
	<View style={styles.viewStyle}>
		<Text style={styles.textStyle}> {text} </Text>
	</View>
);

export default Header;
