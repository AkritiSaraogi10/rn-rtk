import {StyleSheet, View} from 'react-native';
import UserView from './screens/userScreen';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Snackbar} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { setHasInternet, setNetworkVisibleToast } from './reducers/globalSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const hasInternet = useSelector((state: { global: { hasInternet: boolean } }) => state.global.hasInternet);
  const visibleToast = useSelector((state: { global: { visible: boolean } }) => state.global.visible);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (
        ((state.isConnected && state.isInternetReachable) || false) !==
        hasInternet
      ) {
        dispatch(setNetworkVisibleToast(true));
      }
      dispatch(setHasInternet((state.isConnected && state.isInternetReachable) || false));
    });

    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <UserView />
          <Snackbar
            visible={visibleToast}
            onDismiss={() => dispatch(setNetworkVisibleToast(false))}
            action={{
              label: 'ok',
              onPress: () => {
                // Do something
              },
            }}>
            {hasInternet ? 'Connection Restored' : 'Network Unavailable'}
          </Snackbar>
        </View>
      </SafeAreaProvider>
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
