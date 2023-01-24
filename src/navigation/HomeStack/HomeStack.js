import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import navigationStrings from '../../Constants/navigationStrings';
import Home from '../../Screens/HomeStackScreens/HomeScreen/Home';
import User from '../../Screens/HomeStackScreens/UserScreen/User';

const HomeStack = () => {
  const Homestack = createNativeStackNavigator();
  return (
    <Homestack.Navigator screenOptions={{headerShown: false}}>
      <Homestack.Screen name={navigationStrings.USER_HOME} component={Home} />
      <Homestack.Screen name={navigationStrings.USER} component={User} />
    </Homestack.Navigator>
  );
};

export default HomeStack;
