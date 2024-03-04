import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Checkbox, RadioButton, Button} from 'react-native-paper';
// import DropDown from 'react-native-paper-dropdown';
import {Dropdown} from 'react-native-element-dropdown';

export const CustomDropDown = ({control, name, rules = {}, dropDownList}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <Dropdown
            placeholder={!showDropDown ? 'Location' : '...'}
            value={value}
            data={dropDownList}
            labelField="label"
            valueField="value"
            onFocus={() => setShowDropDown(true)}
            onBlur={onBlur}
            onChange={item => {
              onChange(item.value);
            }}
            style={styles.dropdown}
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
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
});
