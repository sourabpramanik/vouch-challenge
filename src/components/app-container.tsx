import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

type Props = {
    children: React.ReactNode
}

export default function AppContainer(porps: Props){
    return(
        <NavigationContainer>
            <NativeBaseProvider>
                {porps.children}
            </NativeBaseProvider>
        </NavigationContainer>
    )
}