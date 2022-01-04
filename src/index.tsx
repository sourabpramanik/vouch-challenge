import React from 'react';
import {StatusBar} from 'react-native'; 
import HomeScreen from './screens/home';
import SignUpPage from './screens/sign-up';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

const Stack = createStackNavigator();

const App = () =>{
    return(
        <SafeAreaProvider>
            <SafeAreaView flex={1}>
                <StatusBar barStyle="dark-content" backgroundColor="#00000000"/>
                <Stack.Navigator
                screenOptions={{
                    headerShown: false,               
                }}
                >
                    <Stack.Screen name="Sign Up" component={SignUpPage} />            
                    <Stack.Screen name="Home" component={HomeScreen} />            
                </Stack.Navigator>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
export default App;