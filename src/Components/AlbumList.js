import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((data) => data.json())
			.then((data) => this.setState({ albums: data }));
	}

	renderAlbumDetails() {
		return this.state.albums.map((album, index) => <AlbumDetails key={album.title} album={album} />);
	}

	render() {
		return <ScrollView>{this.renderAlbumDetails()}</ScrollView>;
	}
}

export default AlbumList;
