import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '../../../components/template/WelcomeScreen'
import FlagButton from '../../../components/uikit/FlagButton'
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../login/LoginScreen';
import { StackNavigationType } from '../../../../App';


export default function LanguageScreen() {

    const navigation = useNavigation<StackNavigationType>();

    return (
        <WelcomeScreen title="Выберите язык" titleMarginBT={35} >

            <FlagButton
                img={require('./../../../assets/images/ru.png')}
                title='Русский' onPress={() => navigation.navigate('LogIn')} />
            <FlagButton
                img={require('./../../../assets/images/uz.png')}
                title='O’zbek' onPress={() => navigation.navigate('LogIn')} />
            <FlagButton
                img={require('./../../../assets/images/en.png')}
                title='English' onPress={() => navigation.navigate('LogIn')} />

        </WelcomeScreen>
    )
}



const styles = StyleSheet.create({

})