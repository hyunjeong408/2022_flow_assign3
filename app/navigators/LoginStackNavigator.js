import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function LoginStackNavigator(){
    return(
        <Stack.Navigator initialRouteName="LOGIN">
            <Stack.Screen name="LOGIN" component={LoginScreen} options={{ title: 'WELCOME', headerShown: false}}/>
            <Stack.Screen name="MAIN" component={TabNavigator} options={{ title: 'MAIN', headerShown: false}}/>
            {/* <Stack.Screen name="CHAT_TO" component={ChatToScreen} options={{ title: 'CHAT_TO', headerShown: false}}/> */}
        </Stack.Navigator>
    );
}