import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Profile from './profile';
import Blog from './blog';
import Home from './home';
import Business from './business';
import Header from '../components/layout/header';
import TabBar from '../components/layout/tabbar';



const Root = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator
            screenOptions={{
                header: (props) => <Header {...props} />,
            }}
            tabBar={(props) => <TabBar {...props} />}
            initialRouteName='Business'
        >
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Blog" component={Blog} />
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Business" component={Business} />
        </Tabs.Navigator >
    )
}

export default Root