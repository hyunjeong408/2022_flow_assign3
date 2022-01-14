import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, ImageBackground, Platform, Image } from 'react-native';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function ChatFromScreen({route}){
    const {status, msg} = route.params;
    // const {msg_id, msg_to_id, msg_from_id, msg_to_nick, msg_from_nick, msg_contents } = msg.params;
    return(
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.letterView}>
                <ImageBackground style={styles.letterBack} resizeMode='contain' source={require('../assets/letter.png')}>
                    <View style={styles.letterBox}>
                        <Text>{msg.msg_contents}</Text>
                    </View>
                    {/* <Text>{msg.msg_contents}</Text> */}
                </ImageBackground>
            </View>
            <View style={styles.iconView}>
                <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/medal.png')}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // container: {
    // },
    background: {
        flex: 1,
        justifyContent: 'space-between',
    },
    letterView: {
        paddingTop: StatusBarHeight+50,
        width: '100%',
        height: '75%',
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
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconBack: {
        width: '60%',
        height: '80%',
        alignItems: 'center',
        justifyContent:'center',
    },
})

export default ChatFromScreen;