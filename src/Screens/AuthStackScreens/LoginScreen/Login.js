import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
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
      <Text>Sign In</Text>
    </View>
  );
};

export default Login;
