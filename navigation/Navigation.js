import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; 
import { RegisterScreen } from '../screens/RegisterScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import 'react-native-url-polyfill/auto'
import { HomeScreen } from '../screens/HomeScreen';
import { useSelector } from 'react-redux';



const MyStack = () => {
    const Stack = createStackNavigator();
    const state = useSelector((state)=> state?.userSlice)
    const session = state.session
    console.log("manito esto =====", session)
    return (
        <Stack.Navigator initialRouteName='Root'>
            <Stack.Screen name='Root' component={session ? HomeScreen : WelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='SignIn' component={session ? HomeScreen : SignInScreen }
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Register' component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Home' component={ HomeScreen }
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export const CookpediaApp = () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}