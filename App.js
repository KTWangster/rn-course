import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {
  state = {
    places: []
  };

placeAddedHandler = placeName => {
  // If user doesn't enter anything
  // If input is not empty...
  this.setState(prevState => {
    return {
      // Allows you to add new places
      places: prevState.places.concat({
        key: `${Math.random()}`, 
        value: placeName
      })
    };
  });
};

placeDeletedHandler = key => {
  this.setState(prevState => {
    return {
      places: prevState.places.filter(place => {
        return place.key !== key;
      })
    };
  });
}

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
