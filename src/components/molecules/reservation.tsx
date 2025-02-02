import {  View } from "react-native";
import Tick from "../../assets/icons/tick";
import Moeny from "../../assets/icons/moeny";
import Text from "../atoms/Text";

const Reservation = () => (
    <View className='flex-row w-full bg-white rounded-xl px-3 py-4 overflow-hidden gap-x-3 shadow-xl shadow-black border border-gray-50'>
        <View className='items-center justify-center gap-y-1'>
            <View className='border flex-row py-2 px-2 rounded-xl items-center justify-center gap-3'>
                <View className=''>
                    <View className='items-center '>
                        <Text className="text-xs">ایران</Text>
                        <Text className='-mt-1 text-xs'>۱۲</Text>
                    </View>
                </View>
                <View className='w-[1px] h-full bg-black' />
                <Text>۳۳۳ الف ۲۲</Text>
            </View>
            <Text className="text-xs">بنز نوک مدادی</Text>
            <Text className="text-xs">آقای علی عزیزی</Text>
        </View>
        <View className='flex-1'>
            <View className='flex-row justify-between w-full'>
                <Text className="text-lg font-bold">کارواش با آۤب</Text>
                <View className="flex-row items-center justify-center gap-2">
                    <Tick />
                    <Text className="text-xs" >در انتظار تایید</Text>
                </View>
            </View>
            <View className='flex-row justify-between items-center'>
                <View>
                    <Text className="max-w-52 text-xs">روشویی‌‌، نظافت داخل، واکس داشبورد</Text>
                    <View className="flex-row items-center gap-2 mt-2">
                        <View className="bg-green-200 rounded-full p-1.5">
                            <Moeny />
                        </View>
                        <Text className="text-lg font-bold text-blue-700">۴۰۰٬۰۰۰ ریال</Text>
                    </View>
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

export default Reservation