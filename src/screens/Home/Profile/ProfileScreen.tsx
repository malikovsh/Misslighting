import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/colors'
import ButtonList from './ButtonList'
import { AdminIcon, BasketIcon3, DiscountIcon, LocationIcon, MassageIcon, NewsIcon, SettingsIcon } from '../../../assets/icons/icons'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titleText}>Профиль</Text>
                <View style={styles.personal}>
                    <Image style={{ width: 86, height: 86 }} source={require('./../../../assets/images/profile.png')} />
                    <View style={styles.NameItem}>
                        <Text style={styles.NameText}>Рафаэль</Text>
                        <TouchableOpacity>
                            <Text>Изменить личные данные</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ gap: 6 }} >
                    <ButtonList title='Мои заказы' icon={<BasketIcon3 />} />
                    <ButtonList title='Настройки' icon={<SettingsIcon />} />
                    <ButtonList title='Мы на карте' icon={<LocationIcon />} />
                    <ButtonList title='Техническая поддержка' icon={<AdminIcon />} />
                    <ButtonList title='Бонусная программа' icon={<DiscountIcon />} />
                    <ButtonList title='Уведомления' icon={<NewsIcon />} />
                    <ButtonList title='Сообщения' icon={<MassageIcon />} />
                </View>
                <TouchableOpacity style={styles.logoutText}>
                    <Text>Выйти из аккаунта</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    titleText: {
        fontWeight: '700',
        fontSize: 25,
        color: COLORS.black,
        marginTop: 27
    },
    personal: {
        marginVertical: 20,
        width: '100%',
        flexDirection: 'row',
        columnGap: 21,
    },
    NameItem: {
        paddingVertical: 18,
        gap: 10
    },
    NameText: {
        fontWeight: '700',
        fontSize: 18,
        color: COLORS.black,
    },
    logoutText: {
        fontWeight: '500',
        fontSize: 15,
        paddingLeft: 53,
        paddingVertical: 45,
        color: '#C8C8C8'
    }
})