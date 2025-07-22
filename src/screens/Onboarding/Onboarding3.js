import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Onboarding3 = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Let’s get started!</Text>
    <Button
      title="Login / Sign Up"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
);

export default Onboarding3;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, marginBottom: 20},
});
