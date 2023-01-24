import {View, Text} from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View
      style={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        },
      ]}>
      <Text>User</Text>
    </View>
  );
};

export default User;
