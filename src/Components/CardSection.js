import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return <View style={styles.CardSectionStyles}>{props.children}</View>;
};

const styles = {
	CardSectionStyles: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection;
