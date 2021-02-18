import React from 'react';
import {Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes, headers} from '../../constants';
import {Home, Promos, Chat} from '../../../screens/mainFlow';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTopTab from '../customTopTab';
const AppStack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainTopTab = () => {
  return (
    <TopTab.Navigator
      swipeEnabled={Platform.OS === 'ios' ? false : true}
      tabBar={(props) => <CustomTopTab {...props} />}
      // initialRouteName={routes.home}
    >
      <TopTab.Screen name={routes.promos} component={Promos} />
      <TopTab.Screen name={routes.home} component={Home} />
      <TopTab.Screen name={routes.chat} component={Chat} />
    </TopTab.Navigator>
  );
};

// const ContainerApp = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: 'skyblue'}}>
//       <Image
//         style={{
//           resizeMode: 'contain',
//           height: 160,
//           width: 300,
//           position: 'absolute',
//           top: 120,
//           zIndex: 1,
//         }}
//         source={require('../../../assets/images/image1.png')}
//       />
//       <MainTopTab />
//     </View>
//   );
// };

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={headers.screenOptions}
      initialRouteName={routes.welcome}>
      {/* <AppStack.Screen name={routes.signin} component={Home}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            /> */}
      <AppStack.Screen
        name={routes.mainTopTab}
        component={MainTopTab}
        options={{
          headerShown: false,
          //title: 'Sign In'
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
