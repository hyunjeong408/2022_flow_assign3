import React, {useEffect} from 'react';
import { BackHandler, Alert } from 'react-native';
import { Image, ImageBackground, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

import signInLogo from '../assets/btn_google_signin.png';


const StatusBarHeight = StatusBar.currentHeight;

function LoginScreen(props) {
    useEffect(() => {
        const backAction = () => {
          Alert.alert("", "앱을 종료하시겠습니까?", [
            {
              text: "취소",
              onPress: () => null,
              style: "cancel"
            },
            { text: "확인", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    async function sinInWithGoogleAsync() {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: "937160071371-p3jldm60dbc9bci0dijkmg9griqvvvrq.apps.googleusercontent.com",
                iosClientId:"937160071371-dcjiom1f3k4ofdv2h5ffq2sssronae24.apps.googleusercontent.com",
                clientId: "937160071371-rf0tggdsr5j0huuuskqfu45suqii9tdm.apps.googleusercontent.com",
            });
            if(type === "success"){
                goMainScreen(user);
            }
            else {
                console.log("Permission denied.");
            }
        } catch (error) {
            console.log(error);
        }

    }


    function goMainScreen(user){
        global.USER_EMAIL = user.email;
        global.USER_NAME = user.name;
        global.iconList=[]

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