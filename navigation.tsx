import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from './screens/userScreen';
import UserDetailScreen from './screens/userDetailsScreen';
import PostScreen from './screens/postScreen';

export type RootStackParamList = {
  Users: undefined;
  UsersDetails: {userId: number};
  Posts: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen
          name="Users"
          options={{headerShown: false}}
          component={UserScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UsersDetails"
          component={UserDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Posts"
          component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
