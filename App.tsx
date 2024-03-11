import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './app/store';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
