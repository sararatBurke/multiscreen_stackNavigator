import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from './stackSreens/screen1';
import Screen2 from './stackSreens/screen2';

const RootStack = () => {


    return (
        <NavigationContainer>
        <Screen1 />
        </NavigationContainer>

    )

};

export default RootStack;