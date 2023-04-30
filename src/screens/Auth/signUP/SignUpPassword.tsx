import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpTemplate from '../../../components/uikit/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/uikit/Button'

const SignUpPassword = () => {
    return (
        <View style={styles.container}>
            <SignUpTemplate title='Регистрация' >
                <View>
                    <InputText label='Введите пароль' placeholder='Ваш пароль' InputBgColor />
                    <InputText label='Подтвердите пароль' placeholder='Введите повторно' InputBgColor />
                    <Button title='Далее' buttomBoxBG titleColor />
                </View>
            </SignUpTemplate>
        </View>
    )
}

export default SignUpPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})