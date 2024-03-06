import {StyleSheet, Text, View} from 'react-native';
import BottomNavBar from './components/bottomNavBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useSelector} from 'react-redux';
import store from './app/store';
import CustomModal from './components/customModal';
import {PaperProvider} from 'react-native-paper';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <CustomModal />
          <BottomNavBar />
        </Provider>
      </PaperProvider>
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
