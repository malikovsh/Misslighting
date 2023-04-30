import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsList from './MainProduct/ProductsList'
import ProductsTitle from '../uikit/ProductsTitle'
import { useNavigation } from '@react-navigation/native';

const ProductsData = [
    {
        id: 1,
        img: require('./../../assets/images/carusel.png'),
        name4: 'В текст представили портрет типичного покупателя',
        name5: 'Подробнее',
    },
    {
        id: 2,
        img: require('./../../assets/images/Product3.png'),
        name4: 'В текст представили портрет типичного покупателя',
        name5: 'Подробнее',
    },
    {
        id: 3,
        img: require('./../../assets/images/Product4.png'),
        name4: 'В текст представили портрет типичного покупателя',
        name5: 'Подробнее',
    },
]

const NewsList = () => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20 }}>
            <ProductsTitle title='Новости' onPress={() => navigation.navigate('News')} />
            <FlatList
                data={ProductsData}
                renderItem={({ item }) =>
                    <ProductsList
                        image={item.img}
                        newPrice={item.name4}
                        buttonText={item.name5}
                        icon={false} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 13, padding: 5 }}
            />
        </View>
    )
}

export default NewsList

const styles = StyleSheet.create({})