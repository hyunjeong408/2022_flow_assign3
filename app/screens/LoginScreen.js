import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, StatusBar, Platform, View, Text, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

import color from '../config/color';
import signInLogo from '../assets/btn_google_signin.png';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function LoginScreen(props) {
    async function sinInWithGoogleAsync() {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: "937160071371-p3jldm60dbc9bci0dijkmg9griqvvvrq.apps.googleusercontent.com",
                clientId: "937160071371-rf0tggdsr5j0huuuskqfu45suqii9tdm.apps.googleusercontent.com",
            });
            if(type === "success"){
                console.log(user);
                goMainScreen();
            }
            else {
                console.log("Permission denied.");
            }
        } catch (error) {
            console.log(error);
        }

    }

    function goMainScreen(){
        props.navigation.navigate('MAIN');
    }

    return (
        <ImageBackground
        style={styles.backgroud}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.logoContainer}>
                <Image
                style={styles.logo}
                resizeMode='contain'
                source={require('../assets/face.png')}/>
                <Text style={styles.textSmall}>정이 많은 호랑이</Text>
                <Text style={styles.textLogo}>정호랑</Text>
            </View>
            <View style={styles.btnBackView}>
                <TouchableOpacity
                    onPress={()=> sinInWithGoogleAsync()}
                    style={styles.loginButton}
                >
                    <Image
                    style={styles.loginImg}
                    resizeMode='contain'
                    source={signInLogo}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
    },
    logoContainer: {
        flex: 0.7,
        // width: "100%",
        // height: "70%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: StatusBarHeight,
    },
    logo: {
        width: '50%',
        height: '50%',
    },
    textSmall: {
        fontFamily: 'daegunL',
        fontSize: 20,
        marginBottom: 10,
    },
    textLogo: {
        fontFamily: 'daegunM',
        fontSize: 60,
        marginBottom: 10,
    },
    btnBackView: {
        flex: 0.3,
        // width: "100%",
        // height: "30%",
        alignItems: 'center',
    },
    loginButton: {
        width: '50%',
        height: '30%',
        alignItems: 'center',
        marginTop: 20,
    },
    loginImg: {
        width: '100%',
        height: '100%',
    }
})
export default LoginScreen;