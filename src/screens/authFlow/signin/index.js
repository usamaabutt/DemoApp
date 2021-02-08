import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MainWrapper, XXLTitle } from '../../../components';
import { appStyles } from '../../../services';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainWrapper style={[appStyles.center]}>
        <XXLTitle>Signin</XXLTitle>
      </MainWrapper>
    );
  }
}

export default Signin;
