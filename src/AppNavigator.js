import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreenComponent from './components/HomeScreen/HomeScreenComponent';
import SplashScreenComponent from './components/SplashScreen/SplashScreenComponent';
import DetailScreenComponent from './components/DetailScreen/DetailScreenComponent';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreenComponent} />
        <Stack.Screen name="HomeScreen" component={HomeScreenComponent} />
        <Stack.Screen name="DetailScreen" component={DetailScreenComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
