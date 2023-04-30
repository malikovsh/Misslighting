import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/colors';
import FavouriteList from './FavouriteList';

type Props = {
    title: string;
};

const ProductsData = [
    {
        id: 1,
        img: require('./../../../assets/images/1212.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
    },
    {
        id: 2,
        img: require('./../../../assets/images/1212.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
    },
    {
        id: 3,
        img: require('./../../../assets/images/1212.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
    },
]

export default function FavoriteItem(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.favouriteItem}>
                <Text style={styles.title}>{props.title}</Text>
                <FlatList
                    data={ProductsData}
                    renderItem={({ item }) =>
                        <FavouriteList
                            img={item.img}
                            content={item.name1}
                            productName={item.name2}
                            oldPrice={item.name3}
                            newPrice={item.name4} />}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    contentContainerStyle={{ padding: 5 }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    favouriteItem: {
        marginHorizontal: 22,
        marginTop: 27
    },
    title: {
        color: COLORS.black,
        fontWeight: '700',
        fontSize: 25
    }
})