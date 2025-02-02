import React from 'react'
import { Text, View } from 'react-native'


const data = Array(3).fill(null).map(() => ({

}))


const Reservation = () => (
    <View className='flex-row w-full bg-white rounded-lg px-3 py-4 overflow-hidden gap-x-3 shadow'>
        <View className='items-center justify-center gap-y-1'>
            <View className='border flex-row py-2 px-2 rounded-xl items-center justify-center gap-3'>
                <View className=''>
                    <View className='items-center '>
                        <Text>ایران</Text>
                        <Text className='-mt-1'>۱۲</Text>
                    </View>
                </View>
                <View className='w-[1px] h-full bg-black' />
                <Text>۳۳۳ الف ۲۲</Text>
            </View>
            <Text>بنز نوک مدادی</Text>
            <Text>آقای علی عزیزی</Text>
        </View>
        <View className='flex-1'>
            <View className='flex-row justify-between w-full'>
                <Text>کارواش با آۤب</Text>
                <Text>در انتظار تایید</Text>
            </View>
            <View className='flex-row justify-between items-center'>
                <View>
                    <Text>روشویی‌‌، نظافت داخل، واکس داشبورد</Text>
                    <Text>۴۰۰٬۰۰۰ ریال</Text>
                </View>

            </View>
            <View className='flex-row justify-center gap-7  mt-auto'>
                <Text>۱۴۰۰-۰۳-۰۸</Text>
                <Text>۱۶:۰۸:۵۱</Text>
            </View>
        </View>
        <View
            className='bg-gray-400 w-16 rounded-l-xl items-center justify-center absolute right-0 top-2/4'>
            <Text className=' text-white font-bold text-lg'>شنبه</Text>
        </View>
    </View>
)

const Reservations = () => {
    return (
        <View className='p-4 gap-3'>
            {data.map((_, i) => (
                <Reservation key={i} />
            ))}
        </View>
    )
}



export default Reservations