import React, {Component} from 'react';
import {I18nManager, SafeAreaView} from 'react-native';
import {Navigation} from './src/services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    I18nManager.forceRTL(true);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Navigation />
      </SafeAreaView>
    )
  }
}

export default App;
