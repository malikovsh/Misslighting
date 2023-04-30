import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowBottomIcon, FiltrIcon } from '../../assets/icons/icons'

const Filters = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', gap: 8 }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 17,
                    color: "#717171",
                    opacity: 0.7
                }}>Популярные</Text>
                <ArrowBottomIcon />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', gap: 8 }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 17,
                    color: "#84A9C0",
                }}>Фильтры</Text>
                <FiltrIcon />
            </TouchableOpacity>
        </View>
    )
}

export default Filters

const styles = StyleSheet.create({
    container: {
        width: 335,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 29
    }
})