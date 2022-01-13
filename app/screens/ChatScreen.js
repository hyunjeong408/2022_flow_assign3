import React, { Component, useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar, Platform, TouchableOpacity, Dimensions } from 'react-native';
import testData from '../assets/testJSON.json';
import color from '../config/color';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const userEmail = "aaa@gmail.com";
const userNickname = "aaa";

const userData = testData.user;
const msgData = testData.message;

const listTab = [
    { status: 'FROM' },
    { status: 'TO' }
]

const Item = ({ msg_from_nick, msg_contents }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{msg_from_nick}</Text>
        <Text numberOfLines={2} style={styles.contents}>{msg_contents}</Text>
    </View>
);
const renderItem = ({item})=>(
    <Item msg_from_nick={item.msg_from_nick} msg_contents={item.msg_contents}/>
);

const ChatScreen = () => {
    const [status, setStatus] = useState('FROM');
    const [msgDataFiltered, setDatalist] = useState([...msgData].reverse());
    const setStatusFilter = status => {
        if(status === 'FROM'){
            setDatalist([...([...msgData].reverse()).filter(e=>e.msg_to_id === userEmail)]);
        }
        else if(status === 'TO') {
            setDatalist([...([...msgData].reverse()).filter(e=>e.msg_from_id === userEmail)])
        }
        setStatus(status)
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                        <TouchableOpacity
                        style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                        onPress={()=> setStatusFilter(e.status)}
                        >
                            <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <FlatList
            data = {msgDataFiltered}
            renderItem={renderItem}
            keyExtractor={(e, item)=>item.msg_id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBarHeight,
    },
    listTab: {
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 20,
    },
    btnTab: {
        width: Dimensions.get('window').width / 2.2,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },
    btnTabActive: {
        backgroundColor: color.tigerorange,
    },
    textTab: {
        fontSize: 17,
        fontWeight: 'bold',
        color: color.tigerorange,
    },
    textTabActive: {
        color: '#fff',
    },
    item: {
        // backgroundColor: 'yellow',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contents: {
        fontSize: 15,
    }
})

export default ChatScreen;