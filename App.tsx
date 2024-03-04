
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CakeView } from './features/cake/cakeView';
import { IcecreamView } from './features/icecream/iceCreamView';
import  UserView  from './features/user/userView';
import { Provider } from 'react-redux'
import store from './app/store'
import { PostView } from './features/post/postView';


// provider --> makes the Redux store available to any nested components
//  that need to access the Redux store

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <ScrollView style={{ padding: 16 }}> */}
          {/* <CakeView />
          <IcecreamView /> */}
          <UserView />
          {/* <PostView /> */}
        {/* </ScrollView> */}
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
