import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
	const { thumbnail_image, title, artist, image, url } = album;
	const { headerContentStyles, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
				</View>

				<View style={headerContentStyles}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image source={{ uri: image }} style={imageStyle} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>Buy Now!!</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyles: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetails;
