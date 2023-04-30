import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsTitle from '../uikit/ProductsTitle'
import ProductsList from './MainProduct/ProductsList'

const ProductsData = [
    {
        id: 1,
        img: require('./../../assets/images/carusel.png'),
        name4: 'Осветительные Приборы',
    },
    {
        id: 2,
        img: require('./../../assets/images/Product3.png'),
        name4: 'Осветительные Приборы',
    },
    {
        id: 3,
        img: require('./../../assets/images/Product4.png'),
        name4: 'Осветительные Приборы',
    },
]

function FamousCategory() {
    return (
        <View style={{ marginTop: 20 }}>
            <ProductsTitle title='Популярные категории' showButton={false} />
            <FlatList
                data={ProductsData}
                renderItem={({ item }) => <ProductsList
                    image={item.img}
                    text1='Осветительные Приборы'
                    showButton={false} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 13, padding: 5 }} />
        </View>
    )
}

export default FamousCategory

const styles = StyleSheet.create({})