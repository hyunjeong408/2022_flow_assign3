import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StatusBarHeight = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

function SendChatScreen({route, navigation}){
    const {sender, getter} = route.params;
    const [txt, setEnteredTxt] = useState('');
    return(
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
                        <View style={styles.letterBox}>
                            <Text style={styles.titleText}>{getter}에게</Text>
                            
                            <TextInput
                            style={styles.contents}
                            multiline={true}
                            maxLength={1500}
                            onChangeText={text => setEnteredTxt(text)}
                            ></TextInput>

                            <Text style={styles.endTitle}>{sender} 씀</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.iconView}>
                    <TouchableOpacity style={styles.iconBack} onPress={()=>{console.log(txt); navigation.goBack(); navigation.goBack();}}>
                        <Image style={styles.iconBack} resizeMode='contain' source={require('../assets/send.png')}/>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    background: {
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
        height: Dimensions.get('window').height/(10/7),
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
        width: '50%',
        height: '70%',
        alignItems: 'flex-end',
        marginRight: 10,
        justifyContent:'center',
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'ejr',
    },
    contents: {
        height: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    endTitle: {
        fontSize: 19,
        fontFamily: 'ejr',
    }
})

export default SendChatScreen;