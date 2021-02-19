import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appIcons } from '../../services';

export const SearchBar = ({style, placeholder}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textInputContainer}>
                <TouchableOpacity>
                    <Image source={appIcons.search} style={{marginHorizontal: 10}} />
                </TouchableOpacity>
                <TextInput
                    placeholder={placeholder}
                    style={{width: width(60), fontSize: 14}}
                />
            </View>
            <View style={styles.profileContainer}>
                <Image source={appIcons.profile} style={{}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height(7),
        width: width(91),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInputContainer: {
        height: height(5),
        width: width(76),
        borderRadius: 100,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#E8E8E8',
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
    },
    profileContainer: {
        height: 45,
        width: 45,
        backgroundColor: '#14682D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});