import React, {useEffect, useRef, useState} from 'react';
import {View, Platform, StyleSheet, Text} from 'react-native';
import {Wrapper, HomeCard} from '../../../components';
import BottomSheet from 'reanimated-bottom-sheet';
import {height, width} from 'react-native-dimension';
import {colors} from '../../../services';
import LinearGradient from 'react-native-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ScrollView} from 'react-native-gesture-handler';

const Chat = ({navigation}) => {
  let scrollRef = useRef(null);

  const [enableScroll, setEnableScroll] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [showShadow, setShadow] = useState(false);
  const [ShadowValue, setShadowValue] = useState(0);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     scrollRef.current.snapTo(1);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [navigation]);

  const config = {
    velocityThreshold: 0.4,
    directionalOffsetThreshold: 80,
  };

  const renderList = () => {
    return (
      <ScrollView
        // scrollEnabled={enableScroll}
        // bounces={false}
        bouncesZoom={false}
        onScroll={(event) => {
          setShadowValue(event.nativeEvent.contentOffset.y);
          if (0 === event.nativeEvent.contentOffset.y) {
            setTimeout(() => setShadow(true), 300);
          } else {
            setShadow(false);
          }
          const x = Platform.OS === 'ios' ? -80 : -2;
          if (event.nativeEvent.contentOffset.y <= x) {
            // scrollRef.current.snapTo(0);
            setEnableScroll(false);
          }
        }}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{width: '100%', alignItems: 'center'}}>
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
        <HomeCard style={{}} />
      </ScrollView>
    );
  };
  return (
    <Wrapper flex={1} style={{backgroundColor: 'white', zIndex: 100}}>
      <View style={styles.bottomSheetContainer}>
        <LinearGradient
          colors={['white', '#ffffff00']}
          style={{
            width: width(98),
            height: showShadow ? 1 : 35,
            backgroundColor: 'transparent',
            position: 'absolute',
            zIndex: 300,
            right: 0,
            left: 0,
            top: 0,
          }}
        />
        {renderList()}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '86%',
    height: 150,
    backgroundColor: 'pink',
    marginVertical: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  bottomSheetContainer: {
    backgroundColor: '#ffffff',
    // padding: 16,
    paddingHorizontal: 16,
    height: '100%',
    width: width(100),
    alignSelf: 'center',
    // zIndex: 500,
    ...Platform.select({
      ios: {
        shadowColor: '#fff',
        shadowOffset: {
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  bottomSheetBarThick: {
    height: 3,
    width: width(10),
    borderRadius: width(15),
    alignSelf: 'center',
    backgroundColor: colors.appBgColor3,
  },
  modalContainer: {
    height: 70,
    width: width(90),
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width(85),
  },
  iconContainer: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 10,
    marginTop: 10,
  },
});

export default Chat;
