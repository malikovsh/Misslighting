import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BasketIcon2 } from '../../../assets/icons/icons'
import { COLORS } from '../../../constants/colors';


type ProductItemCardProps = {
    image: any;
    contentText?: string;
    productName?: string;
    oldPrice?: string;
    newPrice?: string;
    buttonText?: string;
    icon?: boolean;
    showButton?: boolean;
};

export default function ProductsList(props: ProductItemCardProps) {
    return (
        <View style={styles.container}>
            <Image style={{
                width: 162,
                height: 140,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15
            }} source={props.image} />
            <View style={styles.productItem}>
                <>
                    <Text style={styles.content}>{props.contentText}</Text>
                    <Text style={styles.productName}>{props.productName}</Text>
                </>
                <View style={{ marginLeft: 7 }}>
                    <Text style={styles.oldPrice}>{props.oldPrice}</Text>
                    <Text style={styles.newPrice}>{props.newPrice}</Text>
                </View>
                {props.showButton && (<TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{props.buttonText}</Text>
                    {props.icon && (<BasketIcon2 />)}
                </TouchableOpacity>)}
            </View>
        </View>
    )
}

ProductsList.defaultProps = {
    showButton: true,
    icon: true,
    newsText: true,
};

const styles = StyleSheet.create({
    container: {
        width: 162,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowRadius: 17,
        shadowOpacity: 3,
        elevation: 10
    },
    productItem: {
        marginHorizontal: 12,
        marginTop: 12,
        marginBottom: 23
    },
    content: {
        fontWeight: '400',
        fontSize: 13,
        color: '#84A9C0',
    },
    productName: {
        fontWeight: '900',
        color: 'black',
        fontSize: 24,
        marginVertical: 4
    },
    oldPrice: {
        fontWeight: '400',
        fontSize: 15,
        opacity: 0.5,
        color: "#000",
        textDecorationLine: 'line-through'
    },
    newPrice: {
        fontWeight: '400',
        fontSize: 18,
        color: '#000',
        marginVertical: 4
    },
    button: {
        flexDirection: 'row',
        gap: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#84A9C0',
        paddingVertical: 15,
        marginTop: 15
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 15,
        color: '#84A9C0'
    }
})