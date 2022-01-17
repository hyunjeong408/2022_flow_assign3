import React from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusBarHeight = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

function ChatFromScreen({route, navigation}){
    const {status, msg} = route.params;
    const moveToSendPage = () => {
        navigation.navigate('CHAT_SEND', {
            sender: msg.msg_to_nick,
            getter: msg.msg_from_nick,
        });
    }
    return(
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.backIconView}>
                <Icon name={'keyboard-backspace'} size={30} onPress={()=>{navigation.goBack()}}/>
            </View>

            <View style={styles.letterView}>
                <ImageBackground style={styles.letterBack} resizeMode='contain' source={require('../assets/letter.png')}>
                    <View style={styles.letterBox}>
                        <Text style={styles.title}>{msg.msg_to_nick} 에게</Text>

                        <ScrollView style={styles.contents}>
                            <Text style={styles.contentsText}>{msg.msg_contents}</Text>
                        </ScrollView>

                        <Text style={styles.endTitle}>{msg.msg_from_nick} 씀</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.iconView}>
                <TouchableOpacity style={styles.iconBack} onPress={()=>moveToSendPage()}>
                    <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/paperpen.png')}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
    },
    backIconView: {
        marginTop: StatusBarHeight+10,
        height: '5%',
        paddingLeft: 10,
    },
    letterView: {
        width: '100%',
        height: '70%',
    },
    letterBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    letterBox: {
        width: '65%',
        height: '65%',
        right: 5,
        top: 8,
    },
    iconView: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconBack: {
        width: '60%',
        height: '80%',
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent:'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'ejr',
    },
    contents: {
        height: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    contentsText: {
        fontSize: 18,
        fontFamily: 'gowunBold',
    },
    endTitle: {
        fontSize: 19,
        fontFamily: 'ejr',
    }
})

export default ChatFromScreen;