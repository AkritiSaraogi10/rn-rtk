import {StyleSheet, Text, View} from 'react-native';
import UserView from './screens/userScreen';
import {Provider} from 'react-redux';
import store from './app/store';
import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Snackbar} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  const [isConnected, setConnected] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (
        ((state.isConnected && state.isInternetReachable) || false) !==
        isConnected
      ) {
        setVisible(true);
      }
      setConnected((state.isConnected && state.isInternetReachable) || false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <UserView />
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            action={{
              label: 'ok',
              onPress: () => {
                // Do something
              },
            }}>
            {isConnected ? 'Back Online' : 'You are offline'}
          </Snackbar>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
