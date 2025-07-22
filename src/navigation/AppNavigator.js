import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import SetupNavigator from './SetupNavigator';
import MainTabNavigator from './MainTabNavigator';

// Dummy logic, replace with real auth/profile state
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);

  //   useEffect(() => {
  //     // You can fetch auth token and profile here
  //   }, []);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigator onLogin={() => setIsLoggedIn(true)} />
      ) : !profileCompleted ? (
        <SetupNavigator onSetupComplete={() => setProfileCompleted(true)} />
      ) : (
        <MainTabNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
