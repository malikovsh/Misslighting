import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '../../../components/template/WelcomeScreen'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/uikit/Button'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../../../App'




const LoginScreen = () => {

    const navigation = useNavigation<StackNavigationType>()

    return (
        <WelcomeScreen title='Вход' marginVertical={20} >
            <InputText placeholder='Ваш номер' />
            <InputText placeholder='Ваш пароль' />
            <TouchableOpacity style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>Забыли пароль?</Text>
            </TouchableOpacity>
            <Button title='Войти' onPress={() => navigation.navigate('Tab')} />
            <Button title='Регистрация' onPress={() => navigation.navigate('SignUp')} />
        </WelcomeScreen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

})