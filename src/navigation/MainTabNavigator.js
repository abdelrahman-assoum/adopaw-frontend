import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import AssistantScreen from '../screens/Main/AssistantScreen';
import MapScreen from '../screens/Main/MapScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Assistant" component={AssistantScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
