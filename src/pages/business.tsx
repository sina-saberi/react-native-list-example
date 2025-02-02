import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import BannersSwiper from '../components/organisms/bannersSwiper'
import Reservations from '../components/organisms/reservations'
import Carousel from '../components/molecules/carousel'


const Business = () => {

    return (
        <ScrollView >
            <BannersSwiper />
            <Reservations />
            <Carousel />
        </ScrollView>
    )
}

export default Business