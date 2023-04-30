import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/colors'

const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Корзина</Text>
            <View>
                <Text>Оценка и отзывы</Text>

            </View>
        </View>
    )
}

export default BasketScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    titleText: {
        fontWeight: '700',
        fontSize: 25,
        color: COLORS.black,
        marginTop: 27
    },
})