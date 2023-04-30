import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpTemplate from '../../../components/uikit/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/uikit/Button'

const ChangePassScreen = () => {
    return (
        <View style={styles.container}>
            <SignUpTemplate title='Поменять пароль'>
                <InputText label='Новый пароль' InputBgColor />
                <InputText label='Подтвердите пароль' InputBgColor conatinerMarginBT={40} />
                <Button title='Продолжить' buttomBoxBG titleColor />
            </SignUpTemplate>
        </View>
    )
}

export default ChangePassScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})