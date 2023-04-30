import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';


type Props = {
    onPress?: () => void;
    title?: string,
    buttomBoxBG?: boolean,
    titleColor?: boolean,
    marginBottom?: number,
};

function Button(props: Props) {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={[styles.buttonBox, {
                backgroundColor: props.buttomBoxBG
                    ?
                    COLORS.buttomBgBlue
                    :
                    COLORS.white,
                marginBottom: props.marginBottom || 20
            }]}>
            <Text style={[styles.buttomText, {
                color: props.titleColor
                    ?
                    COLORS.white
                    :
                    COLORS.black
            }]}
            >{props.title}</Text>
        </TouchableOpacity>
    );
}

export default Button

const styles = StyleSheet.create({
    buttonBox: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
    },
    buttomText: {
        fontSize: 17,
        fontWeight: '700'
    }
})