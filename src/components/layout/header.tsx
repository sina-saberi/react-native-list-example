import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Menu from '../../assets/icons/menu'
import Heart from '../../assets/icons/heart'

const Header: React.FC<BottomTabHeaderProps> = ({ route }) => {

    const tabs: Record<string, string> = {
        Profile: "پروفایل",
        Blog: "اخبار",
        Home: "خانه",
        Business: "لیست کسب و کار",
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Menu />
            </TouchableOpacity>
            <Text style={styles.title}>{tabs[route.name]}</Text>
            <TouchableOpacity>
                <Heart />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingBottom: 10,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    title: {
        fontSize: 20
    }
})

export default Header