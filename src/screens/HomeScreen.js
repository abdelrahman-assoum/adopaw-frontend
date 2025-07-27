import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
  </View>
);

export default HomeScreen;
