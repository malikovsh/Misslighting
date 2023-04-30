import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import ProductsTitle from '../../components/uikit/ProductsTitle'
import ProductsList from '../../components/AllProducts/MainProduct/ProductsList'

const News = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <ProductsTitle title='Новости' showButton={false} />
                <View style={{ flexDirection: "row", gap: 11, paddingBottom: 5 }}>
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        newPrice='В текст представили портрет типичного покупателя'
                        buttonText='Подробнее' icon={false} />
                    <ProductsList
                        image={require('./../../assets/images/Item.png')}
                        newPrice='В текст представили портрет типичного покупателя'
                        buttonText='Подробнее' icon={false} />
                </View>
            </View>
        </ScrollView>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 20,
        flexDirection: "column",
    }
})