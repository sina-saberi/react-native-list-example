import React from 'react'
import { StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'
interface PaginationProps {
    index: number,
    total: number,
    swiper: Swiper
}

const BannerPagination: React.FC<PaginationProps> = ({ index, total }) => {
    return (
        <View className='bottom-5 absolute items-center justify-center w-full'>
            <View className='bg-gray-50 w-24 flex-row-reverse gap-2 py-1 px-3 rounded-lg'>
                {Array(total).fill(null).map((_, i) => (
                    <View
                        key={i}
                        className='flex-1 h-1.5 rounded-xl'
                        style={{ backgroundColor: index == i ? "#F5AF19" : "#979797" }}
                    />
                ))}
            </View>
        </View>
    )
}

export default BannerPagination