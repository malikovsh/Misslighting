import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type ProductItemCardProps = {
    image: any;
    newPrice?: string;
}

export const CATALOG_CARD_WIDTH = 110

export default function FamouseCategore(props: ProductItemCardProps) {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={{

            }} />
            <View style={{ marginLeft: 7 }}>
                <Text style={styles.newPrice}>{props.newPrice}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        width: CATALOG_CARD_WIDTH,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowRadius: 17,
        shadowOpacity: 3,
        elevation: 10,
    },
    newPrice: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000',
        marginVertical: 4,
        alignSelf: 'center'
    },
})