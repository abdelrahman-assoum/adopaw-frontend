import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../theme/colors';

const CustomTabBar = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <BottomTabBar {...props} style={styles.tabBar} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')}
      >
        <Icon name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tabBar: {
    height: 60,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default CustomTabBar;
