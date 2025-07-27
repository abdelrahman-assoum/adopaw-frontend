import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import AssistantScreen from '../screens/AssistantScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} /> }} />
      <Tab.Screen name="Location" component={LocationScreen} options={{ tabBarIcon: ({ color }) => <Icon name="map-pin" size={22} color={color} /> }} />
      <Tab.Screen name="Add" component={AssistantScreen} options={{ tabBarIcon: () => null }} />
      <Tab.Screen name="Assistant" component={AssistantScreen} options={{ tabBarIcon: ({ color }) => <Icon name="users" size={22} color={color} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => <Icon name="user" size={22} color={color} /> }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
