import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles } from '../../services';
import { IconWithText } from '../icons';

export const CheckBoxPrimary = ({textStyle, containerStyle, text, checked, onPress }) => {
    const checkedIconName = 'checkbox-marked'
    const uncheckedIconName = 'checkbox-blank-outline'
    const checkboxIconType = 'material-community'
    const checkboxappIconsize = sizes.icons.medium
    const checkIconColor = colors.appColor1
    const uncheckIconColor = colors.appTextColor5
    return (
        <IconWithText
            text={text}
            iconName={checked ? checkedIconName : uncheckedIconName}
            iconType={checkboxIconType}
            iconSize={checkboxappIconsize}
            tintColor={checked ? checkIconColor : uncheckIconColor}
            onPress={onPress}
            textStyle={[styles.checkboxText, textStyle]}
            containerStyle={containerStyle}
        />
    );
}

const styles = StyleSheet.create({
    checkboxText: {
        ...appStyles.textRegular,
       // ...appStyles.textGray
    }
})
