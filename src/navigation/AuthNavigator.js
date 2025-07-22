import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding1 from '../screens/Onboarding/Onboarding1';
import Onboarding2 from '../screens/Onboarding/Onboarding2';
import Onboarding3 from '../screens/Onboarding/Onboarding3';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({onLogin}) => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {/* <Stack.Screen name="Onboarding1" component={Onboarding1} />
    <Stack.Screen name="Onboarding2" component={Onboarding2} />
    <Stack.Screen name="Onboarding3" component={Onboarding3} /> */}
    <Stack.Screen name="Login">
      {props => <LoginScreen {...props} onLogin={onLogin} />}
    </Stack.Screen>
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
