import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import SuccessfulLogin from './components/SuccessfulLogin';
import ProjectScreen from './components/ProjectsScreen';
import AddProjectScreen from './components/AddProjectScreen';
import ProjectDetailsScreen from './components/ProjectDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="SuccessfulLogin" component={SuccessfulLogin} />
        <Stack.Screen name="Project" component={ProjectScreen} />
        <Stack.Screen name="AddProject" component={AddProjectScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
