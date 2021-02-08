import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles } from '../../services';
const TextInputColored = ({iconName, iconType, placeholder, onFocus, onBlur, onChangeText, secureTextEntry, value, containerStyle}) => {
    return (
        <View style={[appStyles.inputContainerColored, {
            borderRadius: 10,
            backgroundColor: colors.appBgColor2
        }, appStyles.shadow, containerStyle]}>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={colors.appTextColor5} iconStyle={{}} />
            </View>
            <View style={{ flex: 8 }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    style={[appStyles.inputField, { width: null, height: height(7) }]}
                />
            </View>
        </View>
    );
}
const TextInputBordered = ({iconName, iconType, placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle}) => {
    return (
        <View style={[appStyles.inputContainerBorderd, {
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.appColor1 
        }, containerStyle]}>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={ colors.appColor1 } iconStyle={{}} />
            </View>
            <View style={{ flex: 8 }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    style={[appStyles.inputField, { width: null, height: height(6) }, inputStyle]}
                />
            </View>
        </View>
    );
}

export { TextInputColored, TextInputBordered }