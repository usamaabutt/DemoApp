import React, {useEffect, useRef, useState} from 'react';
import {View, Platform, StyleSheet, ScrollView, Text} from 'react-native';
import {Wrapper} from '../../../components';
import BottomSheet from 'reanimated-bottom-sheet';
import {height, width} from 'react-native-dimension';
import {colors} from '../../../services';
import LinearGradient from 'react-native-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Promos = ({navigation}) => {
  let scrollRef = useRef(null);

  const [enableScroll, setEnableScroll] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [showShadow, setShadow] = useState(false);
  const [ShadowValue, setShadowValue] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      scrollRef.current.snapTo(1);
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        console.log('swipe-direction', gestureName);
        break;
      case SWIPE_DOWN:
        console.log('swipe-direction', gestureName);
        break;
      case SWIPE_LEFT:
        navigation.navigate('home');
        console.log('swipe-direction', gestureName);
        break;
      case SWIPE_RIGHT:
        console.log('swipe-direction', gestureName);
        break;
    }
  } 

  const renderList = () => {
    return (
      <ScrollView
        scrollEnabled={enableScroll}
        bounces={false}
        scrollEventThrottle={16}
        bouncesZoom={false}
        onScroll={(event) => {
          setShadowValue(event.nativeEvent.contentOffset.y);
          if (0 === event.nativeEvent.contentOffset.y) { //ShadowValue >= event.nativeEvent.contentOffset.y
            setTimeout(() => setShadow(true), 300)
          } else {
            setShadow(false);
          }
          // console.log('event-:', event.nativeEvent.contentOffset.y);
          if (event.nativeEvent.contentOffset.y === 0) {
            scrollRef.current.snapTo(0);
            setEnableScroll(false);
          }
        }}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        // style={{backgroundColor: 'green'}}
        contentContainerStyle={{
          width: '95%',
          alignSelf: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
        <View style={styles.cardContainer} />
      </ScrollView>
    );
  };

  const config = {
    velocityThreshold: 0.4,
    directionalOffsetThreshold: 80
  };

  return (
    <Wrapper flex={1} style={{backgroundColor: 'skyblue', zIndex: 100}}>
      <GestureRecognizer
        onSwipe={(direction, state) => {
          onSwipe(direction, state);
          if (state) {
            // console.log('state1',state.moveX)
          }
           console.log('direction, state', direction, state)
        }}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => console.log('swipe down', state)}
        onSwipeLeft={(state) => console.log('swipe left', state)}
        onSwipeRight={(state) => console.log('swipe right', state)}
        config={config}
        style={{
          flex: 1,
          // backgroundColor: '#fff',
        }}>
        <BottomSheet
          ref={(ref) => {
            scrollRef.current = ref;
          }}
          onCloseEnd={() => {
            setEnableScroll(false);
          }}
          onOpenStart={() => {
            setEnableScroll(true);
          }}
          onCloseStart={() => {
            setShowHideModal(false);
            setShadow(false);
            setShadowValue(0);
          }}
          onOpenEnd={() => {
            setShowHideModal(true);
          }}
          snapPoints={[height(40), height(85)]}
          borderRadius={20}
          initialSnap={0}
          enabledBottomInitialAnimation={true}
          renderContent={() => {
            return (
              <View style={styles.bottomSheetContainer}>
                <View style={styles.bottomSheetBarThick} />
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
                    top: 19,
                  }}
                />
                <View flex={1}>{renderList()}</View>
              </View>
            );
          }}
        />
      </GestureRecognizer>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
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
    padding: 16,
    height: height(85),
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

export default Promos;
