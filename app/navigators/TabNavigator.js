import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../config/color';

import HomeScreen from '../screens/HomeScreen';
import ChatStackNavigator from './ChatStackNavigator';



const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) =>{
                let iconName;
                let iconColor = focused ? 'white' : color.tigerorange;

                if(route.name === "Home")  iconName = 'home';
                else iconName = 'message';

                return <Icon name={iconName} color={iconColor} size={30}/>;
            }
        })}
        tabBarOptions={{
            activeBackgroundColor: color.tigerorange,
            inactiveBackgroundColor: 'white',
            showLabel: false,
          }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Chat" component={ChatStackNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
