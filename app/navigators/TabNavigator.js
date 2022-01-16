import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../config/color';

import HomeScreen from '../screens/HomeScreen';
import ChatStackNavigator from './ChatStackNavigator';
import SettingScreen from '../screens/SettingScreen';



const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) =>{
                let iconName;

                if(route.name === "Home") iconName = focused ? 'home' : 'home-outline';
                else if(route.name === "Chat") iconName = focused ? 'message' : 'message-outline';
                else iconName = focused ? 'account': 'account-outline';

                return <Icon name={iconName} color={color.tigerorange} size={30}/>;
            }
        })}
        tabBarOptions={{
            // activeBackgroundColor: color.tigerorange,
            // inactiveBackgroundColor: 'white',
            showLabel: false,
          }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Chat" component={ChatStackNavigator} options={{headerShown: false}}/>
            <Tab.Screen name="Setting" component={SettingScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
