import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchNavigation from '../../../components/Header/SearchNavigation'
import FamouseCategore, { CATALOG_CARD_WIDTH } from './FamouseCategore'

const data = [
    {
        id: 1,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 2,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 3,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 4,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 5,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 6,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 6,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 6,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 2,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 3,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 4,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
    {
        id: 5,
        title: 'Осветительные Приборы',
        img: require('./../../../assets/images/img1.png')
    },
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 3) - 20) / 2

const MainScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <SearchNavigation />
                <View style={styles.Item}>
                    <FlatList
                        data={data}
                        renderItem={(item) => {
                            return (
                                <FamouseCategore key={item.index} image={item.item.img} newPrice={item.item.title} />
                            )
                        }}
                        numColumns={3}
                        contentContainerStyle={{
                            paddingHorizontal: 10,
                        }}
                        columnWrapperStyle={{
                            columnGap: COLUMN_GAP
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingBottom: 100
    },
    Item: {
        flexWrap: 'wrap'
    }
})