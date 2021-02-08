import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles } from '../../services';
import { CardWrapper, RowWrapper, ComponentWrapper, Wrapper, AbsoluteWrapper } from '../wrappers';
import { Spacer } from '../spacers';
import { TinyTitle, RegularText } from '../text';
import { TextInputColored, TextInputBordered } from '../textInput';
import Modal from 'react-native-modal'
import { CheckBoxPrimary } from '../checkBoxs';
import { ButtonColored, ButtonGradiantColored, ButtonBordered } from '../buttons';
import { SearchIcon, CloseIcon } from '../icons';
import { styles } from './styles';
import { LineHorizontal } from '../lines';



export const SwipableModal = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
    return (
        <Modal
            isVisible={isVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            style={{ margin: 0 }}
            // backdropOpacity={0}
            onBackdropPress={toggleModal}
        >
            <Wrapper flex={1}>
                <Wrapper flex={headerFlex ? headerFlex : 1.5} />
                <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
                    {children}
                    <AbsoluteWrapper style={[styles.barContainer]}>
                        <Wrapper style={[appStyles.center]}>
                            <TouchableOpacity onPress={toggleModal}>
                                <LineHorizontal
                                    height={4}
                                    width={width(15)}
                                    style={{ borderRadius: 5 }}
                                    color={colors.appBgColor3}
                                />
                            </TouchableOpacity>
                            <Spacer height={sizes.baseMargin} />
                            <TinyTitle>{title}</TinyTitle>
                        </Wrapper>
                    </AbsoluteWrapper>
                    <AbsoluteWrapper style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
                        <CloseIcon
                            onPress={toggleModal}
                        />
                    </AbsoluteWrapper>
                </Wrapper>
            </Wrapper>
        </Modal>
    );
}


export const AddValueModal = ({ children, placeholder, title, value, onChangeText, isVisible, toggleModal, buttonText, onPressButton,autoFocus }) => {
    return (
        <Modal
            isVisible={isVisible}
            //swipeDirection="down"
            //onSwipeComplete={toggleModal}
            style={{ flex:1,margin: 0,justifyContent:'center' }}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
                <CardWrapper style={[styles.enterValueModalPrimaryCard]}>
                    <TinyTitle >{title ? title : 'Title'}</TinyTitle>
                    <Spacer height={sizes.baseMargin} />
                    <TextInputBordered
                        placeholder={placeholder}
                        value={value}
                        autoFocus={autoFocus}
                        onChangeText={onChangeText}
                        inputContainerStyle={{ marginHorizontal: 0 }}
                    />
                    <Spacer height={sizes.baseMargin} />
                    <ButtonColored
                        text={buttonText ? buttonText : 'ADD'}
                        onPress={onPressButton}
                        buttonStyle={{ marginHorizontal: 0 }}
                    />
                    {children}
                </CardWrapper>
        </Modal>
    );
}