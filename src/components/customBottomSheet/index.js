import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import {Wrapper} from '..';
import {height, width} from 'react-native-dimension';
import {colors} from '../../services';
import LinearGradient from 'react-native-linear-gradient';

const CustomBottomSheet = ({content, referance}) => {
  return (
    <BottomSheet
      ref={(ref) => {
        if (referance) {
          referance.current = ref;
        }
      }}
      onCloseEnd={() => {}}
      snapPoints={[height(10), height(50), height(85)]}
      borderRadius={20}
      initialSnap={1}
      renderContent={() => {
        return (
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetBarThick} />
            <View
              style={{
                height: 20,
                width: width('100'),
                backgroundColor: 'rgba(255,255,255,0.7)',
                position: 'absolute',
                zIndex: 1000,
                alignSelf: 'center',
                marginTop: 19,
              }}
            />
            {content}
          </View>
        );
      }}
    />
  );
};

export {CustomBottomSheet};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: '#f2f2f6',
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
  linearGradient: {
    height: 100,
  },
});
