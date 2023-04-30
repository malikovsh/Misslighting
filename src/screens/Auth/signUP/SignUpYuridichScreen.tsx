import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpTemplate from '../../../components/uikit/SignUpTemplate'
import InputText from '../../../components/uikit/InputText'
import CheckBox from '../../../components/uikit/CheckBox'
import { COLORS } from '../../../constants/colors'
import Button from '../../../components/uikit/Button'

const SignUpYuridichScreen = () => {
    return (
        <View style={styles.container}>
            <SignUpTemplate title='Регистрация'>
                <View>
                    <InputText InputBgColor label='Наименование учреждения' />
                    <InputText InputBgColor label='ИНН' />
                    <InputText InputBgColor label='Свидетельство гос.регистрации' conatinerMarginBT={9} />
                    <Text style={{ marginBottom: 25 }}>Введите номер или прикрепите файл</Text>
                    <InputText InputBgColor label='Свидетельство НДС' />
                    <InputText InputBgColor label='Реквизиты' />
                    <InputText InputBgColor label='Имя' />
                    <InputText InputBgColor label='Фамилия' />
                    <InputText InputBgColor label='Отчество' />
                    <InputText InputBgColor label='Телефон' />
                    <InputText InputBgColor label='Дата рождения' />
                    <CheckBox label='Согласен с' checkout={COLORS.activeButtonBgColor} />
                    <Button title='Далее' buttomBoxBG titleColor />
                </View>
            </SignUpTemplate>
        </View>
    )
}

export default SignUpYuridichScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})