import React from 'react';
import HomeScreen from './screens/home';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            overlayColor: '#00000000'
        }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />            
        </Stack.Navigator>
    )
}
export default App;