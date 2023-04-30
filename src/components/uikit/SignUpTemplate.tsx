import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'

type Props = {
    children: React.ReactNode;
    title: string;
};

export default function SignUpTemplate(props: Props) {
    const imgRequire = require('../../assets/images/logo.png');

    return (
        <ScrollView style={styles.container}>

            <Image style={styles.logo} source={imgRequire} />
            <View style={styles.signupList}>
                <Text style={styles.title}>{props.title}</Text>
                {props.children}
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgcolor
    },
    logo: {
        width: 124,
        height: 162,
        alignSelf: 'center',
    },
    signupList: {
        width: '90%',
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: 100
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.black,
        alignSelf: 'center',
        marginBottom: 36
    }
})