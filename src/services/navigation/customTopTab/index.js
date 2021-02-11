import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {IconWithText} from '../../../components';
import {height, width, totalSize} from 'react-native-dimension';
import {appStyles, sizes} from '../../utilities';

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
    let {activeTabTranslateX, activeTabHeight, activeTabWidth} = this.state;
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
    this.setState({selectedTabIndex: key}, () =>
      this.handleTabSlide(item.x, item.tabHeight, item.tabWidth),
    );
  };

  render() {
    const {state, descriptors, navigation} = this.props;
    //console.log("state==>", state)
    const {routes, index} = state;
    const activeIndex = index;
    const {
      tabs,
      activeTabHeight,
      activeTabTranslateX,
      activeTabWidth,
      selectedTabIndex,
    } = this.state;
    if (tabs[activeIndex].x && selectedTabIndex != activeIndex) {
      this.handleOnPress(tabs[activeIndex], activeIndex);
    }

    return (
      <View
        style={{
          backgroundColor: 'skyblue',
          paddingTop: sizes.statusBarHeight * 1.5,
          // transform: [{scaleX: -1}],
        }}>
        <View style={styles.container}>
          <Animated.View
            style={[
              {
                ...styles.animatedTab,
                height: activeTabHeight,
                width: activeTabWidth,
                transform: [
                  {
                    translateX: activeTabTranslateX,
                  },
                ],
              },
            ]}
          />
          {tabs.map((item, key) => {
            return (
              <TouchableOpacity
                onLayout={(event) => {
                  (item.x = event.nativeEvent.layout.x),
                    (item.tabHeight = event.nativeEvent.layout.height),
                    (item.tabWidth = event.nativeEvent.layout.width),
                    key === activeIndex
                      ? this.handleTabSlide(
                          item.x,
                          item.tabHeight,
                          item.tabWidth,
                        )
                      : null;
                }}
                style={styles.tabBarItem}
                onPress={() => {
                  this.navigationHandler(item.route);
                  this.handleOnPress(item, key);
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
    paddingHorizontal: width(5),
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
    // top: 0,
    backgroundColor: '#FFFFFF40',
    borderRadius: 100,
  },
});
