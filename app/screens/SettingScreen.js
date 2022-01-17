import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Platform, Modal, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../config/color';

const StatusBarHeight = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

function SettingScreen({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    const [userName, setUserName] = useState('');

    const goLoginScreen = () => {
        global.USER_EMAIL = 'defaultEmail';
        global.USER_NAME = 'defaultName';
        navigation.navigate('LOGIN');
    }

    const editUserName = (userName) => {
        global.USER_NAME = userName;
    }

    return(
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            style={{backgroundColor: '#ffffff'}}
            onRequestClose={() => { setModalVisible(!modalVisible); }}
            >
                <BlurView intensity={100} tint='dark' style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontFamily: 'ejr', fontSize: 20, marginBottom: 15}}>EDIT USER NAME</Text>
                        
                        <TextInput
                        maxLength={7}
                        placeholder='7자 이하의 한글/영문'
                        onChangeText={name => setUserName(name)}
                        ></TextInput>
                        <View style={styles.btnGroup}>
                            <TouchableOpacity style={styles.doneEditBtn} onPress={() => {editUserName(userName); setModalVisible(!modalVisible);}}>
                                <Text style={{fontFamily: 'ejr', fontSize: 15}}>  OK  </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.doneEditBtn} onPress={() => {setModalVisible(!modalVisible);}}>
                            <Text style={{fontFamily: 'ejr', fontSize: 15}}>CANCEL</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>

            <View style={styles.backIconView}>
                <Icon name={'keyboard-backspace'} size={30} onPress={()=>{navigation.goBack()}}/>
            </View>

            <View style={styles.settingView}>
                <ImageBackground style={styles.settingBack} resizeMode='cover' source={require('../assets/setting.png')}>
                    <View style={styles.settingBox}>
                        <Text style={styles.title}>{(global.USER_NAME).substring(0, 7)}</Text>
                        <Text style={styles.subtitle}>{global.USER_EMAIL}</Text>
                        <Text style={styles.line} numberOfLines={1}>_____________</Text>

                        <TouchableHighlight style={styles.editBtn} onPress={()=>{setModalVisible(true)}}>
                            <Text style={{fontFamily: 'ejr', fontSize: 20, color: 'white'}}>EDIT</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.logoutBtn} onPress={goLoginScreen}>
                            <Text style={{fontFamily: 'ejr', fontSize: 20, color: 'white'}}>LOGOUT</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
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
        paddingLeft: 20,
    },
    settingView: {
        width: '100%',
        height: '85%',
    },
    settingBack: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    settingBox: {
        width: '60%',
        height: '60%',
        left: 10,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'daegunM',
        marginTop: 15,
        marginBottom: 15,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'daegunL',
    },
    line: {
        width: '80%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 40,
    },
    btnGroup: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editBtn: {
        width: '60%',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: color.tigerorange,
    },
    doneEditBtn: {
        borderRadius: 15,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
        backgroundColor: color.tigerorange,
    },
    logoutBtn: {
        width: '60%',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'red',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:22,        
    },
    modalView: {
        margin: 10,
        width: '60%',
        borderColor: color.tigerorange,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
      },
    
})

export default SettingScreen;