import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack/AuthStack';
import HomeStack from './HomeStack/HomeStack';
import navigationStrings from '../Constants/navigationStrings';
import DrawerStack from './DrawerStack/DrawerStack';

const Routes = () => {
  const Master = createNativeStackNavigator();
  return (
    <Master.Navigator screenOptions={{headerShown: false}}>
      <Master.Screen
        name={navigationStrings.AUTH_STACK}
        component={AuthStack}
      />
      <Master.Screen
        name={navigationStrings.DRAWER_STACK}
        component={DrawerStack}
      />
    </Master.Navigator>
  );
};

export default Routes;
