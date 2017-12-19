import React from 'react';
import {StyleSheet} from 'react-native'
import store from './store'
import {Provider} from 'react-redux'
import HomeScreen from './components/HomeScreen'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
