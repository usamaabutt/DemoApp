import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  I18nManager
} from 'react-native';
import { IconWithText } from '../../../components';
import { height, width, totalSize } from 'react-native-dimension';
import { appStyles, sizes, appIcons, StatusBarHeight } from '../../utilities';

const isRTL = I18nManager.isRTL;

const tabsPoints = {
  0: isRTL ? -width(3) : 0,
  1: isRTL ? width(28) : width(30),
  2: isRTL ? width(59) : width(60),
}
class CustomTopTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: 'Promos',
          iconName: appIcons.promo,
          iconType: 'ionicon',
          route: 'promos',
        },
        {
          title: 'Home',
          iconName: appIcons.home,
          iconType: 'ionicon',
          route: 'home',
        },
        {
          title: 'Chat',
          iconName: appIcons.chat,
          iconType: 'ionicon',
          route: 'chat',
        },
      ],
      tabsRTL: [
        {
          title: 'Chat',
          iconName: appIcons.chat,
          iconType: 'ionicon',
          route: 'promos',
        },
        {
          title: 'Home',
          iconName: appIcons.home,
          iconType: 'ionicon',
          route: 'home',
        },
        {
          title: 'Promos',
          iconName: appIcons.promo,
          iconType: 'ionicon',
          route: 'chat',
        },
      ],
      animationValues: [],
      activeTabTranslateX: new Animated.Value(isRTL ? width(3) : 0),
      activeTabWidth: new Animated.Value(0),
      activeTabHeight: new Animated.Value(0),
      selectedTabIndex: 0,
    };
  }

  navigationHandler = (routeName) => {
    this.props.navigation.navigate(routeName);
  };
  handleTabSlide = (x, height, width) => {
    let { activeTabTranslateX, activeTabHeight, activeTabWidth, selectedTabIndex } = this.state;
    console.log('in-handleTabSlide----', x, height, width);
    Animated.spring(activeTabTranslateX, {
      toValue: isRTL ? -1 * tabsPoints[selectedTabIndex] : tabsPoints[selectedTabIndex],
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
    console.log("state==>", state, descriptors, navigation);
    const { routes, index } = state;
    const activeIndex = index;
    console.log("activeIndex==>", activeIndex)
    const {
      tabsRTL,
      tabs,
      activeTabHeight,
      activeTabTranslateX,
      activeTabWidth,
      selectedTabIndex,
      animationValues
    } = this.state;
    console.log('-------------',tabs[activeIndex].x);
    if (tabs[activeIndex].x != 'undefined' && selectedTabIndex != activeIndex) {
      console.log('-------------IF', tabs[activeIndex],activeIndex);
      this.handleOnPress(tabs[activeIndex], activeIndex);
    }

    let renderTabs = isRTL ? tabsRTL : tabs;

    return (
      <View
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 0.6,
          borderColor: '#E8E8E8',
          // paddingTop: Platform.OS === 'ios' ? sizes.statusBarHeight * 1.5 : 0,
        }}>
        <View style={styles.container}>
          <Animated.View
            style={[
              {
                ...styles.animatedTab,
                // height: activeTabHeight,
                width: activeTabWidth,
                width: isRTL ? width(25) : width(27),
                height: height(4.5),
                transform: [
                  {
                    translateX: activeTabTranslateX,
                  },
                ],
              },
            ]}
          />
          {renderTabs.map((item, key) => {
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
                  customIcon={true}
                  iconName={item.iconName}
                  text={item.title}
                  disabled
                  textStyle={[
                    appStyles.textRegular,
                    appStyles.textBold,
                  ],
                  {fontWeight: '500', color: state.index == key ? '#FFFFFF' : '#14682D'}}
                  iconSize={totalSize(2.5)}
                  tintColor={state.index == key ? '#FFFFFF' : '#14682D'}
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
    // backgroundColor: '#FFFFFF40',
    backgroundColor: '#14682D',
    borderRadius: 100,
  },
});
