import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    children: React.ReactNode;
    marginVertical?: number;
    titleMarginBT?: number;
};

export default function WelcomeScreen(props: Props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("./../../assets/images/bg.png")}
                resizeMode='cover'>
                <View style={styles.box}>
                    <Text style={[styles.title, { marginTop: props.marginVertical || 48, marginBottom: props.titleMarginBT || 20 }]}>{props.title}</Text>
                    <View style={{ width: '100%' }}>
                        {props.children}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    box: {
        top: "27%",
        width: '90%',
        backgroundColor: '#83838380',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 17,
        paddingBottom: 100
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000'
    }
})