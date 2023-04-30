import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import ProductsTitle from '../../components/uikit/ProductsTitle'
import ProductsList from '../../components/AllProducts/MainProduct/ProductsList'
import Filters from '../../components/uikit/Filters'

const MarketList = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <ProductsTitle title='Популярные магазины' showButton={false} />
                <Filters />
                <View style={{ flexDirection: "row", gap: 11, paddingBottom: 5 }}>
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        productName='Ваш Проводник Света'
                        buttonText='Посмотреть' icon={false} />
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        productName='Ваш Проводник Света'
                        buttonText='Посмотреть' icon={false} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MarketList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 20,
        flexDirection: "column",
    }
})