import { NavigationContainer } from '@react-navigation/native';
import React from "react";

import MyTabs from './menus/MyTabs';

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
