import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'

type Props = {
    placeholder?: string,
    inputStyle?: StyleProp<TextStyle>
    InputBgColor?: boolean,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    conatinerMarginBT?: number
}

const InputText = (props: Props) => {
    return (
        <View style={[styles.container, { marginBottom: props.conatinerMarginBT || 30 }]}>
            {props.label ?
                <Text style={[styles.label, props.labelStyle,]}>{props.label}</Text>
                : null
            }
            <View style={[styles.inputBox,
            {
                backgroundColor: props.InputBgColor
                    ?
                    COLORS.textInputBgGrey
                    :
                    COLORS.white
            }]}>
                <TextInput style={[
                    styles.inputTitle,
                    props.inputStyle,
                ]}
                    placeholder={props.placeholder}
                    placeholderTextColor={COLORS.black}
                />
            </View>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    inputBox: {
        width: '100%',
        borderRadius: 45,
    },
    inputTitle: {
        width: '100%',
        height: 55,
        fontSize: 16,
        fontWeight: '400',
        paddingLeft: 26,
        paddingVertical: 10
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.black,
        marginBottom: 15
    }
})