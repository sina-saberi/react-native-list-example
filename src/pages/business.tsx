import React from 'react'
import { Text, View } from 'react-native'
import BannersSwiper from '../components/organisms/bannersSwiper'
import Reservations from '../components/organisms/reservations'

const Business = () => {
    return (
        <View style={{ flex: 1 }}>
            <BannersSwiper />
            <Reservations />
        </View>
    )
}

export default Business