import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
import * as Animatable from 'react-native-animatable';
import { SmallText } from '../text';

export const BackIcon = ({ style, onPress, size }) => {
    return (
        <Icon
            name="ios-arrow-back"
            type="ionicon"
            size={size ? size : totalSize(2)}
            //raised
            reverse
            reverseColor={colors.appTextColor6}
            color={colors.appColor1}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const IconButton = ({ style, onPress, iconSize, iconColor, iconName, iconType, buttonColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.IconButtonContainer, { backgroundColor: buttonColor ? buttonColor : colors.appColor1 }, style]}
        >
            <Icon
                name={iconName ? iconName : "heart"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : sizes.icons.large}
                color={iconColor ? iconColor : colors.appTextColor6}
            />
        </TouchableOpacity>
    );
}
export const MenuIcon = ({ style, onPress, color, size }) => {
    return (
        <Icon
            name="menu"
            type="entypo"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const FilterIcon = ({ style, onPress, color, size }) => {
    return (
        <Icon
            name="options"
            type="ionicon"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CustomIcon = ({ icon, size, animation, duration, color }) => {
    const defaulSize = totalSize(5)
    return (
        <Animatable.View animation={animation} duration={duration}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
            />
        </Animatable.View>
    );
}
export const TouchableCustomIcon = ({ icon, size, animation, duration, color, onPress }) => {
    const defaulSize = totalSize(5)
    return (
        <TouchableOpacity onPress={onPress}>
            <CustomIcon
                icon={icon}
                size={size}
                animation={animation}
                duration={duration}
                color={color}
            />
        </TouchableOpacity>
    );
}

export const IconWithText = ({ text, disabled, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle }) => {
    let defaulSize = totalSize(2.5);
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <Image
                        source={iconName}
                        resizeMode="contain"
                        style={{ tintColor: tintColor }}
                    />
                    :
                    <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : colors.appTextColor1} iconStyle={iconStyle} />
            }
            <View style={direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(2) }}>
                {
                    title ?
                        <Text style={[appStyles.textRegular, { color: tintColor ? tintColor : colors.appTextColor1, fontFamily: FontFamily.appTextBold, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                <SmallText style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</SmallText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    IconButtonContainer: {
        height: totalSize(5),
        width: totalSize(5),
        backgroundColor: colors.appColor1,
        borderRadius: 10,
        ...appStyles.center,
        //  ...appStyles.shadow
    }
})