import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import theme from "../theme" ;

type Props = {
    children: React.ReactNode
}

export default function AppContainer(porps: Props){
    return(
        <NavigationContainer>
            <NativeBaseProvider theme={theme}>
                {porps.children}
            </NativeBaseProvider>
        </NavigationContainer>
    )
}