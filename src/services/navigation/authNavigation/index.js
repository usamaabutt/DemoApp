import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { header, routes,headers} from '../../constants';
import { Signin, Signup, } from '../../../screens/authFlow';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={headers.screenOptions}
            initialRouteName={routes.welcome}
        >
            <AuthStack.Screen name={routes.signin} component={Signin}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            />
            <AuthStack.Screen name={routes.signup} component={Signup}
                options={{
                    headerShown: false,
                    //title: 'sign Up'
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation