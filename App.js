import React, {Component} from 'react';
import {I18nManager} from 'react-native';
import {Navigation} from './src/services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    I18nManager.forceRTL(false);
  }

  render() {
    return <Navigation />;
  }
}

export default App;
