import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpTemplate from '../../../components/uikit/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/uikit/Button'

const ReturnPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <SignUpTemplate title='Восстановить пароль'>
                <InputText label='Номер телефона' InputBgColor />
                <Button title='Запросить код' buttomBoxBG titleColor />
            </SignUpTemplate>
        </View>
    )
}

export default ReturnPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})