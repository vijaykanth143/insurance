import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../../Constants/navigationStrings';
import HomeStack from '../HomeStack/HomeStack';

const Drawerstack = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawerstack.Navigator>
      <Drawerstack.Screen
        name={navigationStrings.HOME_STACK}
        component={HomeStack}
      />
    </Drawerstack.Navigator>
  );
};

export default DrawerStack;
