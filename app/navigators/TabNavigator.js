import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
