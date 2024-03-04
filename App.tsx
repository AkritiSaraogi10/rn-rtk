import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PaperProvider} from 'react-native-paper';

import React from 'react';
import {VASLoginScreen} from './src/screens/VASLoginScreen';
import TabContainer from './src/navigation/TabScreen';
import {SignUpScreen} from './src/screens/signup';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              name="LoginScreen"
              component={VASLoginScreen}
              options={{title: '', headerShown: false}}
            />

            <Stack.Screen
              name="TabNav"
              component={TabContainer}
              options={{
                title: '',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{
                title: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
