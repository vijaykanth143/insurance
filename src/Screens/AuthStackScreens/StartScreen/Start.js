import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../../../Constants/navigationStrings';
import ButtonComp from '../../../Components/ButtonComp';
import {Styles} from './style';

const Start = () => {
  const navigation = useNavigation();
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
      <ButtonComp
        title="Get Started"
        onPress={() =>
          navigation.navigate(navigationStrings.DRAWER_STACK, {
            screen: navigationStrings.HOME_STACK,
          })
        }
        buttonStyle={Styles.buttonStyle}
        textStyle={Styles.textStyle}
      />
    </View>
  );
};

export default Start;
