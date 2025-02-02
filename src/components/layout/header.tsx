import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Menu from '../../assets/icons/menu'
import Heart from '../../assets/icons/heart'
import Text from '../atoms/Text'

const Header: React.FC<BottomTabHeaderProps> = ({ route }) => {

    const tabs: Record<string, string> = {
        Profile: "پروفایل",
        Blog: "اخبار",
        Home: "خانه",
        Business: "لیست کسب و کار",
    }

    return (
        <View className='p-7 pb-4 flex-row items-center justify-between bg-white'>
            <TouchableOpacity>
                <Menu />
            </TouchableOpacity>
            <Text className='font-bold text-2xl'>{tabs[route.name]}</Text>
            <TouchableOpacity>
                <Heart />
            </TouchableOpacity>
        </View>
    )
}

export default Header