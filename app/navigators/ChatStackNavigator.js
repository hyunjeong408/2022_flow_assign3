import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from '../screens/ChatScreen';
import ChatFromScreen from '../screens/ChatFromScreen';
import ChatToScreen from '../screens/ChatToScreen';
import SendChatScreen from '../screens/SendChatScreen';

const Stack = createStackNavigator();

export default function ChatStackNavigator(){
    return(
        <Stack.Navigator initialRouteName="CHATLIST">
            <Stack.Screen name="CHATLIST" component={ChatScreen} options={{ title: 'CHATLIST', headerShown: false}}/>
            <Stack.Screen name="CHAT_FROM" component={ChatFromScreen} options={{ title: 'CHAT_FROM', headerShown: false}}/>
            <Stack.Screen name="CHAT_TO" component={ChatToScreen} options={{ title: 'CHAT_TO', headerShown: false}}/>
            <Stack.Screen name="CHAT_SEND" component={SendChatScreen} options={{title: 'CHAT_SEND', headerShown: false}}/>
        </Stack.Navigator>
    );
}