import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps...
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function GoogleMap() {
  const origin = {latitude: 19.07609, longitude: 72.877426};
  const destination = {latitude: 19.230478, longitude: 73.153716};
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 19.2072,
          longitude: 73.17,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyAqDCKWtVl7x94CZOjJQ3V0y248YIDRLTc'}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
    </View>
  );
}

export default GoogleMap;
