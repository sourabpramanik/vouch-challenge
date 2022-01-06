import React, {useEffect, useContext} from 'react';
import {StatusBar} from 'react-native'; 
import HomeScreen from './screens/home';
import SignUpPage from './screens/sign-up';
import Verify from './screens/verify';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import UserContext from './context/user';

const Stack = createStackNavigator();

const App = () =>{
    const {authUser, verificationProp, setConfirming} = useContext(UserContext);

    useEffect(()=>{
        checkUser();   
    },[]);

    function checkUser() {
       if(!authUser){
           return
       }
       setConfirming(false)       
    }; 

    return(
        <SafeAreaProvider>         
            <SafeAreaView flex={1}>
                <StatusBar barStyle="dark-content" backgroundColor="#00000000"/>
                <Stack.Navigator
                screenOptions={{
                    headerShown: false,               
                }}
                >       
                {!authUser ? 
                    <Stack.Group>
                        {!verificationProp ?
                            <Stack.Screen name="Sign Up" component={SignUpPage} options={{animationEnabled: false}}/>
                            : 
                            <Stack.Screen name="VerifyPage" component={Verify} options={{animationEnabled: false}}/>
                        }                                                 
                    </Stack.Group>
                    :
                    <Stack.Screen name="Home" component={HomeScreen} />            
                }
                                                                            
                </Stack.Navigator>
            </SafeAreaView>              
        </SafeAreaProvider>
    )
}
export default App;