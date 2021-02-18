import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Platform
} from 'react-native';
import { IconWithText } from '../../../components';
import { height, width, totalSize } from 'react-native-dimension';
import { appStyles, sizes } from '../../utilities';

class CustomTopTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: 'Promos',
          iconName: 'tag',
          iconType: 'ionicon',
          route: 'promos',
        },
        {
          title: 'Home',
          iconName: 'home',
          iconType: 'ionicon',
          route: 'home',
        },
        {
          title: 'Chat',
          iconName: 'comment',
          iconType: 'ionicon',
          route: 'chat',
        },
      ],
      animationValues: [],
      activeTabTranslateX: new Animated.Value(0),
      activeTabWidth: new Animated.Value(0),
      activeTabHeight: new Animated.Value(0),
      selectedTabIndex: 0,
    };
  }

  navigationHandler = (routeName) => {
    this.props.navigation.navigate(routeName);
  };
  handleTabSlide = (x, height, width) => {
    let { activeTabTranslateX, activeTabHeight, activeTabWidth } = this.state;
    console.log(x, height, width);
    Animated.spring(activeTabTranslateX, {
      toValue: x,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(activeTabHeight, {
      toValue: height,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.spring(activeTabWidth, {
      toValue: width,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  handleOnPress = (item, key) => {
    this.setState({ selectedTabIndex: key }, () =>
      this.handleTabSlide(item.x, item.tabHeight, item.tabWidth),
    );
  };
  handleOnlayoutTabs = (event) => {
    (tabs[key].x = -event.nativeEvent.layout.x),
      (tabs[key].tabHeight = event.nativeEvent.layout.height),
      (tabs[key].tabWidth = event.nativeEvent.layout.width),
      key === activeIndex
        ? this.handleTabSlide(
          item.x,
          item.tabHeight,
          item.tabWidth,
        )
        : null;
  }
  render() {
    const { state, descriptors, navigation } = this.props;
    //console.log("state==>", state)
    const { routes, index } = state;
    const activeIndex = index;
    const {
      tabs,
      activeTabHeight,
      activeTabTranslateX,
      activeTabWidth,
      selectedTabIndex,
      animationValues
    } = this.state;
    if (tabs[activeIndex].x && selectedTabIndex != activeIndex) {
      this.handleOnPress(tabs[activeIndex], activeIndex);
    }
    const isRTL = false
    return (
      <View
        style={{
          backgroundColor: 'skyblue',
          paddingTop: Platform.OS === 'ios' ? sizes.statusBarHeight * 1.5 : 0,
          // transform: [{scaleX: -1}],
        }}>
        <View style={styles.container}>
          <Animated.View
            style={[
              {
                ...styles.animatedTab,
                // height: activeTabHeight,
                // width: activeTabWidth,
                width: width(27.5),
                height: height(5),
                transform: [
                  {
                    //scaleX: -1,
                    translateX: activeTabTranslateX,
                  },
                ],
              },
            ]}
          />
          {tabs.map((item, key) => {
            const tempItem = isRTL ? tabs[tabs.length - (key + 1)] : item
            return (
              <TouchableOpacity
                onLayout={(event) => {
                  (item.x = isRTL?-event.nativeEvent.layout.x:event.nativeEvent.layout.x),
                    (item.tabHeight = event.nativeEvent.layout.height),
                    (item.tabWidth = event.nativeEvent.layout.width)

                  key === activeIndex && tempItem.x ?
                    // ? this.handleTabSlide(
                    //   tempItem.x,
                    //   tempItem.tabHeight,
                    //   tempItem.tabWidth,
                    // )
                    this.handleOnPress(tempItem, key)
                    : null;
                }}
                style={styles.tabBarItem}
                onPress={() => {
                  this.navigationHandler(item.route);
                  this.handleOnPress(tempItem, key);
                }}>
                <IconWithText
                  iconName={item.iconName}
                  text={item.title}
                  disabled
                  textStyle={[
                    appStyles.textRegular,
                    appStyles.textBold,
                    appStyles.textWhite,
                  ]}
                  iconSize={totalSize(2.5)}
                  tintColor={'#FFFFFF'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

export default CustomTopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //  height: 50,
    // width: '100%',
    marginHorizontal: width(7.5),
    paddingVertical: height(2),

    justifyContent: 'space-between',
  },
  tabBarItem: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  animatedTab: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#FFFFFF40',
    borderRadius: 100,
  },
});
