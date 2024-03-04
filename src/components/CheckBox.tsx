import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Checkbox, RadioButton, Button} from 'react-native-paper';

export const CheckBox = ({control, name, rules = {}, text}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <View style={styles.CheckBox}>
              <Text>{text}</Text>
              <Checkbox.Android
                status={value == 'checked' ? 'checked' : 'unchecked'}
                onPress={() => {
                  if (value == 'checked') onChange('unchecked');
                  else onChange('checked');
                }}
              />
            </View>
          </>
        )}
      />
    </View>
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
  CheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
