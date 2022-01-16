import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();


export default function LoginStackNavigator(){

    const LogoScreen = () => {
        const navigations = useNavigation();
        setTimeout(() => navigations.navigate('LOGIN'), 3000);
        return <SplashScreen />
    }
    return(
        <Stack.Navigator initialRouteName="SPLASH">
            <Stack.Screen name="SPLASH" component={LogoScreen} options={{ title: 'SPLASH', headerShown: false}}/>
            <Stack.Screen name="LOGIN" component={LoginScreen} options={{ title: 'WELCOME', headerShown: false}}/>
            <Stack.Screen name="MAIN" component={TabNavigator} options={{ title: 'MAIN', headerShown: false}}/>
        </Stack.Navigator>
    );
}