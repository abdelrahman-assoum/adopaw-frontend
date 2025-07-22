import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Onboarding2 = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Track and care for your pets easily.</Text>
    <Button title="Next" onPress={() => navigation.navigate('Onboarding3')} />
  </View>
);

export default Onboarding2;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, marginBottom: 20},
});
