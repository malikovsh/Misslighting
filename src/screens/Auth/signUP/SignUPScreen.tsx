import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpTemplate from '../../../components/uikit/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import Button from '../../../components/uikit/Button'
import CheckBox from '../../../components/uikit/CheckBox'
import { COLORS } from '../../../constants/colors'

export default function SignUPScreen() {
    return (
        <View style={styles.container}>
            <SignUpTemplate title='Регистрация'>
                <View>
                    <InputText label='Номер телефона' InputBgColor placeholder='Ваш номер' />
                    <InputText label='Имя' InputBgColor placeholder='Ваше имя' />
                    <InputText label='Фамилия' InputBgColor placeholder='Ваша фамилия' />
                    <InputText label='Отчество' InputBgColor placeholder='Ваше отчество' />
                    <InputText label='Дата рождения' InputBgColor placeholder='Ваша дата рождения' />
                    <CheckBox label='Согласен с' checkout={COLORS.activeButtonBgColor} />
                    <Button title='Далее' buttomBoxBG titleColor />
                </View>
            </SignUpTemplate>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})