import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Card, Avatar} from 'react-native-paper';
import {LeftSideNavIcons, RightSideNaveIcons} from '../navigation/NavBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeComponent = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.customInput}>
        <View style={styles.btnContianer}>
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text variant="titleLarge">Details</Text>
                <Avatar.Icon size={24} icon="account" />
              </View>
              <Text variant="bodyMedium"> UserName: some text </Text>
              <Text variant="bodyMedium"> Email: some text</Text>
              <Text variant="bodyMedium"> Location: some text</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                icon={'account-edit'}
                style={styles.btn}
                mode="contained"
                onPress={() => console.log()}>
                Edit Profile
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </View>
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="initialHome">
      <Stack.Screen
        name="HomeComponent"
        component={HomeComponent}
        options={{
          title: '',
          headerShown: true,
          headerLeft: () => (
            <LeftSideNavIcons
              leftIcon={{show: false, name: ''}}
              title={'Home'}
            />
          ),
          headerRight: () => (
            <RightSideNaveIcons rightIcon={{show: true, name: ''}} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '60%',
    marginVertical: 10,
  },
  btnContianer: {
    alignItems: 'center',
  },
  customInput: {
    padding: 30,
    width: '100%',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
