import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Onboarding1 = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Pet App! 🐾</Text>
    <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
  </View>
);

export default Onboarding1;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, marginBottom: 20},
});
