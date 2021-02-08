import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, fontSize, sizes } from '../../services';
import { ButtonTextRegular, ButtonTextMedium } from '../text';
import { color } from 'react-native-reanimated';
import { CustomIcon } from '../icons';
import { Wrapper, RowWrapperBasic, RowWrapper, ComponentWrapper } from '../wrappers';

export const ButtonColored = ({text,animation, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle, tintColor}) => {
    return (
       <TouchableOpacity  onPress={onPress}>
            <Wrapper animation={animation} style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: height(7), backgroundColor: buttonColor ? buttonColor : colors.appColor1 }, appStyles.shadow, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={tintColor ? tintColor : colors.appTextColor6}
                            iconStyle={[{ marginRight: width(5) }, iconStyle]}

                        />
                        :
                        null
                }
                <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</ButtonTextMedium>
            </View>
        </Wrapper>
       </TouchableOpacity>
    );
}

export const ButtonColoredSmall = ({text, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <CustomIcon
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={iconColor ? iconColor : colors.appTextColor6}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={iconColor ? iconColor : colors.appTextColor6}
                                iconStyle={[{}, iconStyle]}
                            />
                            :
                            null
                }
                <ButtonTextRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </ButtonTextRegular>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonBordered = ({text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: height(7), borderColor: tintColor ? tintColor : colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <CustomIcon
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={iconColor ? iconColor : null}
                            style={[{ marginRight: width(5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(5) }, iconStyle]}

                            />
                            :
                            null
                }
                <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appColor1, }, textStyle]}>{text}</ButtonTextMedium>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonBorderedSmall = ({ text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
            <View style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={tintColor ? tintColor : colors.appColor1}
                            iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                        />
                        :
                        null
                }
                <Text style={[appStyles.ButtonTextRegular, { color: tintColor ? tintColor : colors.appColor1, fontSize: fontSize.regular }, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonArrowColored = ({text, onPress,animation, buttonStyle, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle, tintColor}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ComponentWrapper animation={animation}  style={[{ borderRadius: sizes.buttonRadius, backgroundColor: buttonColor ? buttonColor : colors.appColor1, paddingVertical: height(1.25) }, appStyles.shadow, buttonStyle]}>
                <RowWrapper>
                    <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</ButtonTextMedium>
                    <Icon
                        name={iconName ? iconName : "chevron-right"}
                        type={iconType ? iconType : "material-community"}
                        size={iconSize ? iconSize : totalSize(5)}
                        color={tintColor ? tintColor : colors.appTextColor6}
                        iconStyle={[{}, iconStyle]}
                    />
                </RowWrapper>
            </ComponentWrapper>
        </TouchableOpacity>
    );
}


