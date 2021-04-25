import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from './stackSreens/screen1';
import Screen2 from './stackSreens/screen2';

const RootStack = () => {


    return (
        <NavigationContainer>
        <Screen2 />
        </NavigationContainer>

    )

};

export default RootStack;