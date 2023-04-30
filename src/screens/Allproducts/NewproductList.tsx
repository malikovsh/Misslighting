import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsTitle from '../../components/uikit/ProductsTitle'
import ProductsList from '../../components/AllProducts/MainProduct/ProductsList'
import Filters from '../../components/uikit/Filters'

const NewproductList = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <ProductsTitle title='Новые товары' showButton={false} />
                <Filters />
                <View style={{ flexDirection: "row", gap: 11, paddingBottom: 5 }}>
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        contentText='Люстры'
                        productName='KR77'
                        oldPrice='1.200.000'
                        newPrice='700.000'
                        buttonText='В корзину' />
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        contentText='Люстры'
                        productName='KR77'
                        oldPrice='1.200.000'
                        newPrice='700.000'
                        buttonText='В корзину' />
                </View>
            </View>
        </ScrollView>
    )
}

export default NewproductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 20,
        flexDirection: "column",
    }
})