import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import {routes} from '../constants';
import {Splash} from '../../screens/authFlow';

const MainStack = createStackNavigator();

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2500);
  };
  render() {
    const {loading} = this.state;

    // if (loading)
    //     return <Splash />
    // else
    return (
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={routes.app}>
          <MainStack.Screen name={routes.auth} component={AuthNavigation} />
          <MainStack.Screen name={routes.app} component={AppNavigation} />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}
