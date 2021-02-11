import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {colors} from '../../services';
import Modal from 'react-native-modal';
import {height, width} from 'react-native-dimension';

export const BottomSheet = props => {
  const {
    slider,
    showModal,
    disableSwipe,
    close,
    onBackdropClose,
    opacity,
    avoidKeyboard,
    animationInTime,
    animationOutTime,
    height,
  } = props;

  return (
    <Modal
      animationInTiming={animationInTime ? animationInTime : 700}
      animationOutTiming={animationOutTime ? animationOutTime : 700}
      // deviceWidth={width(100)}
      // deviceHeight={height(100)}
      propagateSwipe={true}
      animationType="fade"
      transparent={true}
      isVisible={showModal}
      onSwipeComplete={() => close(false)}
      // onBackdropPress={() => (onBackdropClose ? close(false) : null)}
      swipeDirection={disableSwipe ? null : 'down'}
      avoidKeyboard={avoidKeyboard}
      hasBackdrop={true}
      backdropColor={'black'}
      backdropOpacity={opacity ? opacity : 0}
      onRequestClose={() => {}}
      style={[
        styles.modalWrapper,
        {minHeight: height || null, maxHeight: height || null},
      ]}>
      <TouchableWithoutFeedback
        onPress={() => close(false)}
        style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.modalView}>
            {slider ? <View style={styles.header} /> : null}
            <View style={styles.contextContainer}>{props.children}</View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalWrapper: {margin: 0},
  modalView: {
    width: width(100),
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contextContainer: {
    width: width(100),
    marginTop: width(1),
    overflow: 'hidden',
  },
  keyboardAvoiding: {
    width: width(92),
    marginTop: width(1),
  },
  header: {
    width: width(36),
    height: width(1.3),
    backgroundColor: colors.bottomSheetHeader,
    borderRadius: width(1.5),
    marginTop: width(2),
  },
});
