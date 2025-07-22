import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const PetPreferencesScreen = ({onComplete}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set your pet preferences 🐶🐱</Text>
      {/* Add input fields or checkboxes here */}
      <Button title="Continue to App" onPress={onComplete} />
    </View>
  );
};

export default PetPreferencesScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24},
  title: {fontSize: 20, marginBottom: 24, textAlign: 'center'},
});
