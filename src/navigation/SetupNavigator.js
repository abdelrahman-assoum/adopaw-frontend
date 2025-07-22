import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PetPreferencesScreen from '../screens/PetPreferencesScreen';

const Stack = createNativeStackNavigator();

const SetupNavigator = ({onSetupComplete}) => (
  <Stack.Navigator>
    <Stack.Screen name="PetPreferences">
      {props => (
        <PetPreferencesScreen {...props} onComplete={onSetupComplete} />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default SetupNavigator;
