import React, {useEffect, useRef, useState} from 'react';
import {View, Platform, StyleSheet, Text, Image} from 'react-native';
import {Wrapper} from '../../../components';
import {height, width} from 'react-native-dimension';
import {colors, appIcons} from '../../../services';
import LinearGradient from 'react-native-linear-gradient';
import Bike from 'react-native-vector-icons/MaterialCommunityIcons';
import Car from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
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
  // }, []);

  const renderList = () => {
    return (
      <ScrollView
        // scrollEnabled={enableScroll}
        onScroll={(event) => {
          // console.log('event value', event.nativeEvent.contentOffset);
          setShadowValue(event.nativeEvent.contentOffset.y);
          if (0 === event.nativeEvent.contentOffset.y) {
            //ShadowValue >= event.nativeEvent.contentOffset.y
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
    <Wrapper flex={1} style={{backgroundColor: 'skyblue'}}>
      <View style={styles.bottomSheetContainer}>
        <LinearGradient
          colors={['white', '#ffffff00']}
          style={{
            width: width(100),
            height: showShadow ? 1 : 35,
            backgroundColor: 'transparent',
            position: 'absolute',
            zIndex: 300,
            right: 0,
            left: 0,
            top: 15,
          }}
        />
        {renderList()}
        {/* <View style={{position: 'absolute', zIndex: 400, bottom: 0, top: 0, left: 0, right: 0}}> */}
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <View style={styles.iconView}>
                <View
                  style={[styles.iconContainer, {backgroundColor: '#00AED6'}]}>
                  <Image source={appIcons.med} style={{}} />
                </View>
                <Text style={styles.textIcon}>Med</Text>
              </View>

              <View style={styles.iconView}>
                <View
                  style={[styles.iconContainer, {backgroundColor: '#00AA13'}]}>
                  <Image source={appIcons.coffee} style={{}} />
                </View>
                <Text style={styles.textIcon}>Coffee</Text>
              </View>

              <View style={styles.iconView}>
                <View style={[styles.iconContainer, {backgroundColor: '#F06400'}]}>
                  <Image source={appIcons.food} style={{}} />
                </View>
                <Text style={styles.textIcon}>Food</Text>
              </View>

              <View style={styles.iconView}>
                <View style={[styles.iconContainer, {backgroundColor: '#ED2736'}]}>
                  <Image source={appIcons.market} style={{}} />
                </View>
                <Text style={styles.textIcon}>Market</Text>
              </View>
            </View>
          </View>
        {/* </View> */}
      </View>
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
    height: 90,
    width: width(90),
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
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
    height: 45,
    width: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default Home;
