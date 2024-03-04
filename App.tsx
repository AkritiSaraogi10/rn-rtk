import {StyleSheet, Text, View} from 'react-native';
import UserView from './screens/userScreen';
import {Provider} from 'react-redux';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <UserView />
      </View>
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
