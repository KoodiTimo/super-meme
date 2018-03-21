// Importit
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// CLASS-BASED COMPONENT (dynaaminen data) Pros: lifecycle methods
class AlbumList extends Component {
  // STEP 1. Declaration of state :D Eli kun renderöidään, niin albumeitten tila on tyhjä array[].
  state = { albums: [] };

  // Executee ku tulee ruutuun ??
  componentWillMount() {
    // Debug master
    // console.log('component will mount :D in albumlist');

    // axios hakee tavaraa                                       STEP 2 LOPUSSA. --->
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
  return (
    // Jos haluaa scrollata, niin viewiin pitää saada ScrollView normaalin Viewn sijaan. Tämä ei riitä.
    <ScrollView>
    {this.renderAlbums()}
    </ScrollView>
  );
}
}

export default AlbumList;
