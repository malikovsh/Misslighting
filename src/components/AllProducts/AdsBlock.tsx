import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors';
import ProductsList from './MainProduct/ProductsList';


type Props = {
    title: string;
};

const AdsData = [
    {
        id: 1,
        img: require('./../../assets/images/carusel.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
    },
    {
        id: 2,
        img: require('./../../assets/images/carusel.png'),
        name1: 'Люстры',
        name2: 'KR77',
        name3: '1.200.000 UZS',
        name4: '700.000 UZS',
    },
]

export default function AdsBlock(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.favouriteItem}>
                <Text style={styles.title}>{props.title}</Text>
                <FlatList
                    data={AdsData}
                    renderItem={({ item }) =>
                        <ProductsList
                            image={item.img}
                            contentText={item.name1}
                            productName={item.name2}
                            oldPrice={item.name3}
                            newPrice={item.name4}
                            buttonText='В корзину' />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 5, marginTop: 23, gap: 11, marginBottom: 20 }}
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