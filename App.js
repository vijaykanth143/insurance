import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Login from './src/Screens/AuthStackScreens/LoginScreen/Login';
import Home from './src/Screens/HomeStackScreens/HomeScreen/Home';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack/HomeStack';
import AuthStack from './src/navigation/AuthStack/AuthStack';
import Routes from './src/navigation/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
