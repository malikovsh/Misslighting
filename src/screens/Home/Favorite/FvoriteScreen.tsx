import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsTitle from '../../../components/uikit/ProductsTitle'
import FavouriteList from '../../../components/AllProducts/MainProduct/FavouriteList'
import FavoriteItem from '../../../components/AllProducts/MainProduct/FavoriteItem'
import AdsBlock from '../../../components/AllProducts/AdsBlock'

const FvoriteScreen = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View>
                <View style={styles.productsList}>
                    <FavoriteItem title='Избранные' />
                </View>
                <View>
                    <AdsBlock title='Рекламный блок' />
                </View>
            </View>
        </ScrollView>
    )
}

export default FvoriteScreen

const styles = StyleSheet.create({
    productsList: {
        paddingVertical: 5
    }
})