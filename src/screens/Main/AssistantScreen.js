import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AssistantScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>🧠 Assistant</Text>
  </View>
);

export default AssistantScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
