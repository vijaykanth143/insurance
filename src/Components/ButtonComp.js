import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonComp = ({
  title,
  onPress = () => {},
  buttonStyle,
  textStyle,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={textStyle}>{title}</Text>
        {!!icon ? (
          <View style={iconStyle}>
            <Icon name={icon} size={30} />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComp;
