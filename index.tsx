/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './app/store';

const Index = () => {
  return (
      <Provider store={store} children={<App />} />
  );
};

AppRegistry.registerComponent(appName, () => Index);
