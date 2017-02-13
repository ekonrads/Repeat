import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'App'} />
      </View>
    );
  }
}

export default App;
