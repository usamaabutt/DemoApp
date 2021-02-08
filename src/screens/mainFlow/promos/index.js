import React, {useEffect, useRef, useState} from 'react';
import {View, Platform, StyleSheet, ScrollView, Text} from 'react-native';
import {Wrapper} from '../../../components';
import BottomSheet from 'reanimated-bottom-sheet';
import {height, width} from 'react-native-dimension';
import {colors} from '../../../services';
import LinearGradient from 'react-native-linear-gradient';
import Bike from 'react-native-vector-icons/MaterialCommunityIcons';
import Car from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
const Promos = (props) => {
  let scrollRef = useRef(null);

  const [enableScroll, setEnableScroll] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const renderList = () => {
    return (
      <ScrollView
        scrollEnabled={enableScroll}
        onScroll={(event) => {
          if (event.nativeEvent.contentOffset.y <= 0) {
            scrollRef.current.snapTo(0);
            // setEnableScroll(false);
          }
        }}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width: '100%', alignItems: 'center'}}>
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
  return (
    <Wrapper flex={1} style={{backgroundColor: 'skyblue', zIndex: 100}}>
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
        }}
        onOpenEnd={() => {
          setShowHideModal(true);
        }}
        snapPoints={[height(20), height(85)]}
        borderRadius={20}
        initialSnap={0}
        renderContent={() => {
          return (
            <View style={styles.bottomSheetContainer}>
              <View style={styles.bottomSheetBarThick} />
              <LinearGradient
                colors={['white', '#ffffff00']}
                style={{
                  width: width(100),
                  height: 30,
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
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    height: 50,
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
    zIndex: 500,
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
