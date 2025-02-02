import React from 'react'
import { ScrollView } from 'react-native'
import BannersSwiper from '../components/organisms/bannersSwiper'
import Reservations from '../components/organisms/reservations'
import Carousel from '../components/molecules/carousel'


const Business = () => {

    return (
        <ScrollView className='bg-white'>
            <BannersSwiper />
            <Reservations />
            <Carousel />
        </ScrollView>
    )
}

export default Business