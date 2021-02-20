import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appIcons, appImages } from '../../services';

export const HomeCard = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={appImages.food} style={styles.imageStyle} />
            <View style={{padding: 15}}>
                <Text style={styles.title}>Welcome to patrioot</Text>
                <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: height(25),
        width: width(91),
        marginTop: 17,
        backgroundColor: 'white',
        borderRadius: 17,
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2.84,
            },
            android: {
              elevation: 5,
            },
          }),
    },
    imageStyle: {
        height: height(16),
        width: width(91),
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'black'
    },
});