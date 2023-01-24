import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../Screens/AuthStackScreens/LoginScreen/Login';
import navigationStrings from '../../Constants/navigationStrings';
import Start from '../../Screens/AuthStackScreens/StartScreen/Start';

const AuthStack = () => {
  const Authstack = createNativeStackNavigator();
  return (
    <Authstack.Navigator screenOptions={{headerShown: false}}>
      <Authstack.Screen name={navigationStrings.GETSTARTED} component={Start} />
      <Authstack.Screen name={navigationStrings.LOGIN} component={Login} />
    </Authstack.Navigator>
  );
};

export default AuthStack;
