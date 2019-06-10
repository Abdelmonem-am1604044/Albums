import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/Components/Header';

const App = () => <Header />;

AppRegistry.registerComponent('Albums', () => App);
