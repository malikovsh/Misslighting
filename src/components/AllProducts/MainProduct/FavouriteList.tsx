import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/colors'
import { BasketIcon2, IgnorIcon } from '../../../assets/icons/icons'

type FavoriteProps = {
    img: any;
    content?: string;
    productName?: string;
    oldPrice?: string;
    newPrice?: string;
}

export default function FavouriteList(props: FavoriteProps) {
    return (
        <View style={styles.favouriteItem}>
            <Image source={props.img} style={{ width: 91, height: 92 }} />
            <View>
                <Text style={styles.content}>{props.content}</Text>
                <Text style={styles.productName}>{props.productName}</Text>
                <View style={{ marginLeft: 6 }}>
                    <Text style={styles.oldPrice}>{props.oldPrice}</Text>
                    <Text style={styles.newPrice}>{props.newPrice}</Text>
                </View>
            </View>
            <View style={{ rowGap: 29, width: 41, marginTop: 10 }}>
                <TouchableOpacity style={styles.ignorIcon}>
                    <IgnorIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.basketIcon}>
                    <BasketIcon2 />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    favouriteItem: {
        width: '100%',
        marginTop: 21,
        padding: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 17,
        elevation: 3,
        borderRadius: 10
    },
    content: {
        color: COLORS.black,
        fontWeight: '400',
        fontSize: 13,
        opacity: 0.3
    },
    productName: {
        color: COLORS.black,
        fontWeight: '700',
        fontSize: 24,
    },
    oldPrice: {
        color: COLORS.black,
        fontWeight: '400',
        fontSize: 15,
        textDecorationLine: "line-through"
    },
    newPrice: {
        color: COLORS.black,
        fontWeight: '400',
        fontSize: 20,
    },
    ignorIcon: {
        alignSelf: "flex-end"
    },
    basketIcon: {
        width: 41,
        height: 38,
        borderColor: '#84A9C0',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }

})