import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Platform, Image, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StatusBarHeight = StatusBar.currentHeight;

function SendChatScreen({route, navigation}){
    const {sender, getter} = route.params;
    const [txt, setEnteredTxt] = useState('');
    // const {user} = route.params;
    return(
        // <KeyboardAwareScrollView>
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.backIconView}>
                <Icon name={'keyboard-backspace'} size={30} onPress={()=>{navigation.goBack()}}/>
            </View>
            <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.letterView}>
                <ImageBackground style={styles.letterBack} resizeMode='contain' source={require('../assets/letter.png')}>
                {/* <KeyboardAwareScrollView> */}
                    <View style={styles.letterBox}>
                        <Text style={styles.titleText}>{getter}에게</Text>
                        <TextInput
                        style={styles.contents}
                        multiline={true}
                        maxLength={1500}
                        onChangeText={text => setEnteredTxt(text)}
                        ></TextInput>
                        {/* <Text style={styles.title}>{msg.msg_to_nick} 에게</Text> */}
                        {/* <ScrollView style={styles.contents}> */}
                            {/* <Text style={styles.contentsText}>{msg.msg_contents}</Text> */}
                        {/* </ScrollView> */}
                        <Text style={styles.endTitle}>{sender} 씀</Text>
                    </View>
                    {/* </KeyboardAwareScrollView> */}
                </ImageBackground>
            </View>
            {/* </KeyboardAwareScrollView> */}
            {/* </KeyboardAwareScrollView> */}
            {/* <KeyboardAwareScrollView> */}
            <View style={styles.iconView}>
                <TouchableOpacity style={styles.iconBack} onPress={()=>console.log(txt)}>
                    <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/send.png')}/>
                </TouchableOpacity>
                {/* <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/paperpen.png')}/> */}
            </View>
            </KeyboardAwareScrollView>
            {/* <View style={styles.iconView}>
                <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/paperpen.png')}/>
            </View> */}
        </ImageBackground>
        // </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
    },
    contentContainer: {
        // alignItems:'center',
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    background: {
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    backIconView: {
        marginTop: StatusBarHeight+10,
        height: '5%',
        paddingLeft: 10,
    },
    letterView: {
        // flex: 1,
        // width: '100%',
        // height: '100%',
        height: Dimensions.get('window').height/(10/7),
        // backgroundColor: 'blue',
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
        // backgroundColor: 'red',
    },
    iconBack: {
        width: '50%',
        height: '70%',
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent:'center',
        // backgroundColor: 'purple',
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'ejr',
    },
    contents: {
        height: '80%',
        marginTop: 10,
        marginBottom: 10,
        // justifyContent: 'flex-start',
        // backgroundColor: 'grey',
    },
    // contentsText: {
    //     fontSize: 18,
    //     fontFamily: 'gowunBold',
    // },
    endTitle: {
        fontSize: 19,
        fontFamily: 'ejr',
    }
})

export default SendChatScreen;