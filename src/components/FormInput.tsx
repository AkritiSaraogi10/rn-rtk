import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Text} from 'react-native-paper';

export const CustomInput = ({
  control,
  name,
  placeholder,
  label,
  rules = {},
  secureTextEntry = false,
}) => {
  const [showPwd, setShowPWd] = useState(secureTextEntry);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <TextInput
            outlineColor="#4C6700"
            activeOutlineColor="#4C6700"
            mode="outlined"
            label={label}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            style={[styles.textInput]}
            error={error ? true : false}
            secureTextEntry={showPwd}
            onBlur={onBlur}
            right={
              secureTextEntry ? (
                <TextInput.Icon
                  icon="eye"
                  onPress={() => {
                    setShowPWd(!showPwd);
                  }}
                />
              ) : (
                ''
              )
            }
          />
          {error && <Text>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 50,
  },
  textInput: {
    marginVertical: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  input: {
    borderWidth: 1,
  },
});
