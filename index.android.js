import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header text="Albums" />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('Albums', () => App);
