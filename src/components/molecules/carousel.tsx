import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
const CAROUSEL_ITEMS = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
];

const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;

function Index() {
    const progressValue = useSharedValue<number>(0);

    const renderItem = () => {
        return (
            <View className=' h-60 rounded-2xl overflow-hidden'>
                <Image className='w-full h-full' source={require("./../../assets/images/2a55ce54c8bfe26e03b9c19e9eb4499e.jpg")} />
            </View>
        )
    }

    return (
        <View
            style={{
                alignItems: 'center',
            }}
        >
            <Carousel<string>
                loop
                snapEnabled
                // autoPlay={true}
            
                width={PAGE_WIDTH}
                height={PAGE_WIDTH * 0.6}
                pagingEnabled
                onProgressChange={(_, absoluteProgress) => progressValue.value = absoluteProgress}
                mode="parallax"
                data={CAROUSEL_ITEMS}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Index;