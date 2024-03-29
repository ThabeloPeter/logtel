import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import ClientHomeScreen from './ClientHomeScreen';
import ViewCardDetailsScreen from './ViewCardDetailsScreen'; 
import AdminHomeScreen from './AdminHomeScreen'; 
import AdminViewCardDetailsScreen from './AdminViewCardDetailsScreen'; // Import AdminViewCardDetailsScreen

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ClientHome" component={ClientHomeScreen} />
        <Stack.Screen name="ViewCardDetails" component={ViewCardDetailsScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AdminViewCardDetails" component={AdminViewCardDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
