import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../HomeScreen/HomeScreen';
import FvoriteScreen from '../Favorite/FvoriteScreen';
import MainScreen from '../Main/MainScreen';
import BasketScreen from '../Basket/BasketScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BasketIcon, HeartIcon, HomeIcon, MainIcon, ProfileIcon } from '../../../assets/icons/icons';
import { COLORS } from '../../../constants/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    width: '100%',
                    height: 70,
                    backgroundColor: COLORS.buttomBgBlue,
                    paddingBottom: 11,
                    paddingTop: 11,
                },
            }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () => <HomeIcon />
                }} />
                <Tab.Screen name="Favourite" component={FvoriteScreen} options={{
                    tabBarIcon: () => <HeartIcon />,
                }} />
                <Tab.Screen name="Catalogue" component={MainScreen} options={{
                    tabBarIcon: () => <MainIcon />,
                }} />
                <Tab.Screen name="Basket" component={BasketScreen} options={{
                    tabBarIcon: () => <BasketIcon />,
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: () => <ProfileIcon />,
                }} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({

})