import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { ReportIcon, SearchIcon } from '../../assets/icons/icons'

const SearchNavigation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder={"Я ищу..."}
                    placeholderTextColor={'#717171B2'}
                />
                <SearchIcon fill={'#84A9C0'} style={{ marginRight: 10 }} />
            </View>
            <View style={styles.NotificationBox}>
                <TouchableOpacity>
                    <ReportIcon fill={'#84A9C0'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchNavigation

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 15,
    },
    searchBox: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.tabBgColor,
        height: 50,
        borderRadius: 45,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#84A9C0',
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: COLORS.tabBgColor,
        width: '90%',
        borderRadius: 45,
        height: '100%',
    },
    NotificationBox: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    }
})