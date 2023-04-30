import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsTitle from '../uikit/ProductsTitle'
import ProductsList from './MainProduct/ProductsList'
import { useNavigation } from '@react-navigation/native';

const ProductsData = [
    {
        id: 1,
        img: require('./../../assets/images/carusel.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
        name5: 'В корзину',
    },
    {
        id: 2,
        img: require('./../../assets/images/Product3.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
        name5: 'В корзину',
    },
    {
        id: 3,
        img: require('./../../assets/images/Product4.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
        name5: 'В корзину',
    },
]

const DiscountProduct = () => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20 }}>
            <ProductsTitle title='Товары со скидкой' onPress={() => navigation.navigate('Discount')} />
            <FlatList
                data={ProductsData}
                renderItem={({ item }) =>
                    <ProductsList
                        image={item.img}
                        contentText={item.name1}
                        productName={item.name2}
                        oldPrice={item.name3}
                        newPrice={item.name4}
                        buttonText={item.name5} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 13, padding: 5 }}
            />
        </View>
    )
}

export default DiscountProduct

const styles = StyleSheet.create({})