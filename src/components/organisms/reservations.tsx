import React from 'react'
import { View } from 'react-native'
import Reservation from '../molecules/reservation'


const data = Array(3).fill(null).map(() => ({

}))


const Reservations = () => {
    return (
        <View className='p-4 gap-3'>
            {data.map((_, i) => <Reservation key={i} />)}
        </View>
    )
}



export default Reservations