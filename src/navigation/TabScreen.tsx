import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {HomeScreen} from '../screens/HomePage';
import {FixedNav} from './NavBar';

const Tab = createMaterialBottomTabNavigator();

function TabContainer(): React.JSX.Element {
  const auth = false;
  return (
    <>
      <FixedNav />
      <Tab.Navigator initialRouteName="HomeScreen">
        {/* create indivisual stack for each tab  */}
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
            tabBarIcon: 'home',
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TabContainer;
