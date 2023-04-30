import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsTitle from '../uikit/ProductsTitle'
import ProductsList from './MainProduct/ProductsList'
import { useNavigation } from '@react-navigation/native';


const ProductsData = [
    {
        id: 1,
        img: require('./../../assets/images/carusel.png'),
        name2: 'Ваш Проводник Света',
        name5: 'Посмотреть',
    },
    {
        id: 2,
        img: require('./../../assets/images/Product3.png'),
        name2: 'Изысканный Парфюм со Всего Мира',
        name5: 'Посмотреть',
    },
    {
        id: 3,
        img: require('./../../assets/images/Product4.png'),
        name2: 'Изысканный Парфюм со Всего Мира',
        name5: 'Посмотреть',
    },
]

const FamousShop = () => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20 }}>
            <ProductsTitle title='Популярные магазины' onPress={() => navigation.navigate('Market')} />
            <FlatList
                data={ProductsData}
                renderItem={({ item }) =>
                    <ProductsList
                        image={item.img}
                        productName={item.name2}
                        buttonText={item.name5}
                        icon={false} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 13, padding: 5 }}
            />
        </View>
    )
}

export default FamousShop

const styles = StyleSheet.create({})