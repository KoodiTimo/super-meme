// index.android.js - place code in here for Android!

// importataan kirjasto komponentin luomista varten
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Luodaan komponentti
const App = () =>
  (
    // Please expand this component to fill the entire content of the device. Eli flex: 1 on jumala
    <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
  );


// Tulostetaan komponentti kännykälle
AppRegistry.registerComponent('albums', () => App);
