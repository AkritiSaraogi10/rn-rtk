import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CustomBtn = ({
  buttonColor = '#4C6700',
  buttonTextColor = '#000000',
  onPressMethod,
  text,
  mode,
}) => {
  const handleOnPress = () => {
    onPressMethod();
  };

  return (
    <Button
      buttonColor={mode == 'text' ? '' : buttonColor}
      textColor={buttonTextColor}
      mode={mode}
      style={styles.btn}
      onPress={handleOnPress}>
      {text}
    </Button>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '100%',
  },
});
