import Laptop from "../../assets/icons/laptop";
import Users from "../../assets/icons/users";
import HomeIcon from "../../assets/icons/home"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Comment from "../../assets/icons/comment";
import { TouchableOpacity, View } from "react-native";
import Text from "../atoms/Text";

interface NavigationItem {
    icon: React.ReactNode,
    name: string;
}


const TabBar = ({ state, navigation }: BottomTabBarProps) => {
    const items: Record<string, NavigationItem> = {
        Profile: {
            icon: <Users />,
            name: "پروفایل"
        },
        Blog: {
            icon: <Laptop />,
            name: "اخبار"
        },
        Home: {
            icon: <HomeIcon />,
            name: "خانه"
        },
        Business: {
            icon: <Comment />,
            name: "کسب و کار"
        }
    }

    return (
        <View className='p-6 bg-white'>
            <View className='flex-row bg-blue-700 p-7 rounded-3xl justify-center gap-10'>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const item = items[route.name];
                    return (
                        <TouchableOpacity
                            key={route.key}
                            className='flex-row items-center justify-center gap-2'
                            onPress={() => navigation.navigate(route.name)}
                        >
                            {isFocused && <Text className='text-white text-lg'>{item.name}</Text>}
                            {item.icon}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default TabBar