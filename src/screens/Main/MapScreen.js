import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MapScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>🗺️ Map</Text>
  </View>
);

export default MapScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
