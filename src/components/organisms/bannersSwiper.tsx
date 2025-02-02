import React from 'react'
import { Image, View } from 'react-native'
import Swiper from 'react-native-swiper'
import BannerPagination from '../molecules/bannerPagination'

const BannersSwiper = () => {
    return (
        <View className='p-5 mt-1'>
            <Swiper
                className='rounded-xl h-64 overflow-hidden '
                showsPagination={true} autoplay loop={true} autoplayDirection={false}
                renderPagination={(index, total, swiper) => <BannerPagination index={index} swiper={swiper} total={total} />}>
                {Array(3).fill(null).map((_, i) => (
                    <View key={i} className='w-full h-full'>
                        <Image className='w-full h-full' source={require("./../../assets/images/car.jpg")} />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}


export default BannersSwiper