import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowIcon, BasketIcon3 } from '../../../assets/icons/icons'
import { COLORS } from '../../../constants/colors'

type ButtonListProps = {
    icon: any;
    title: string;
}

export default function ButtonList(props: ButtonListProps) {



    return (
        <TouchableOpacity style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    {props.icon}
                </View>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
            <View >
                <ArrowIcon />
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: '100%',
        padding: 16,
        borderRadius: 5,
        marginBottom: 6,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 3,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: COLORS.white
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 15,
        color: COLORS.black,
        marginLeft: 17,
    }
})