import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatStackNavigator from './ChatStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';



const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) =>{
                let iconName;
                if(route.name === "Home") {
                    iconName = 'home';
                }
                else {
                    iconName = 'message';
                }
                let iconColor = focused ? 'white' : color.tigerorange;
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
