import "./global.css";
import React from 'react';
import { I18nManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Root from './pages';


I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

const App = () => {
    return (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    )
}

export default App