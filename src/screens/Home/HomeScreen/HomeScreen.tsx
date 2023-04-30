import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { } from 'react-native'
import SearchNavigation from '../../../components/Header/SearchNavigation'
import FamousProduct from '../../../components/AllProducts/FamousProduct'
import FamousCategory from '../../../components/AllProducts/FamousCategory'
import DiscountProduct from '../../../components/AllProducts/DiscountProduct'
import NewProduct from '../../../components/AllProducts/NewProduct'
import OrderProduct from '../../../components/AllProducts/OrderProduct'
import FamousShop from '../../../components/AllProducts/FamousShop'
import NewsList from '../../../components/AllProducts/NewsList'
import { COLORS } from '../../../constants/colors'

const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.white, }}>
            <View style={styles.container}>
                <View style={styles.Banner}>
                    <Image style={styles.BannerImg} source={require('./../../../assets/images/BannerTop.png')} />
                </View>
                <View style={styles.Banner2}>
                    <Image style={styles.BannerImg2} source={require('./../../../assets/images/BannerBattom.png')} />
                </View>
                <SearchNavigation />
                <FamousProduct />
                <FamousCategory />
                <DiscountProduct />
                <NewProduct />
                <OrderProduct />
                <FamousShop />
                <NewsList />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50
    },
    Banner: {
        marginTop: 10,
        alignItems: 'center',
    },
    BannerImg: {
        width: '100%',
        height: 120
    },
    Banner2: {
        marginTop: 12,
        alignItems: 'center',
    },
    BannerImg2: {
        width: '100%',
        height: 250
    },
})