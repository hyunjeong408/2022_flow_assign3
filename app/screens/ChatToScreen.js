import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Platform, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function ChatFromScreen({route, navigation}){
    const {status, msg} = route.params;
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
                <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/medal.png')}/>
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
        height: '90%',
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'ejr',
    },
    contents: {
        height: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    contentsText: {
        fontSize: 17,
        fontFamily: 'gowun',
    },
    endTitle: {
        fontSize: 17,
        // fontWeight: 'bold',
        fontFamily: 'ejr',
    }
})

export default ChatFromScreen;