import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, FlatList, StatusBar, Platform, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Text numberOfLines={1} style={styles.title}>{msg_from_nick}</Text>
        <Text numberOfLines={2} style={styles.contents}>{msg_contents}</Text>
    </View>
);

const ChatScreen = (props) => {
    const [status, setStatus] = useState('FROM');
    const [msgDataFiltered, setDatalist] = useState([...([...msgData].reverse()).filter(e=>e.msg_to_id === userEmail)]);
    const setStatusFilter = status => {
        if(status === 'FROM'){
            setDatalist([...([...msgData].reverse()).filter(e=>e.msg_to_id === userEmail)]);
        }
        else if(status === 'TO') {
            setDatalist([...([...msgData].reverse()).filter(e=>e.msg_from_id === userEmail)])
        }
        setStatus(status)
    }

    const renderItem = ({item})=>(
        <TouchableOpacity onPress={()=>moveToDetailPage(item)}>
            <Item msg_from_nick={item.msg_from_nick} msg_contents={item.msg_contents}/>
        </TouchableOpacity>
    );
    
    const moveToDetailPage = (item) => {
        if(status === 'FROM'){
            props.navigation.navigate('CHAT_FROM', {
                status: status,
                msg: item,
            });
        }
        else{
            props.navigation.navigate('CHAT_TO', {
                status: status,
                msg: item,
            });
        }
    }

    return(
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.backIconView}>
                <Icon name={'keyboard-backspace'} size={30} onPress={()=>{props.navigation.goBack()}}/>
            </View>

            <View style={styles.backView}>
                <View style={styles.listSpace}>
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
                    style = {styles.listStyle}
                    renderItem={renderItem}
                    keyExtractor={(e, item)=>item.msg_id}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    backView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    backIconView: {
        marginTop: StatusBarHeight,
        height: '5%',
        paddingLeft: 15,
    },
    listSpace: {
        height: '80%',
        padding: 7,
        marginBottom: 10,
    },
    listStyle: {
        margin: 7,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    listTab: {
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 17,
    },
    btnTab: {
        width: Dimensions.get('window').width / 2.2,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    btnTabActive: {
        backgroundColor: color.tigerorange,
    },
    textTab: {
        fontSize: 17,
        fontFamily: 'ejr',
        color: color.tigerorange,
    },
    textTabActive: {
        color: '#fff',
    },
    item: {
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontFamily: 'ejr',
    },
    contents: {
        fontSize: 15,
        fontFamily: 'gowunBold',
    }
})

export default ChatScreen;