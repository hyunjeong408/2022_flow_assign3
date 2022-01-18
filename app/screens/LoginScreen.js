import React, {useEffect} from 'react';
import { BackHandler, Alert } from 'react-native';
import { Image, ImageBackground, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

import signInLogo from '../assets/btn_google_signin.png';

const StatusBarHeight = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

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
    async function signInWithGoogleAsync() {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: "937160071371-p3jldm60dbc9bci0dijkmg9griqvvvrq.apps.googleusercontent.com",
                iosClientId:"937160071371-dcjiom1f3k4ofdv2h5ffq2sssronae24.apps.googleusercontent.com",
                clientId: "937160071371-rf0tggdsr5j0huuuskqfu45suqii9tdm.apps.googleusercontent.com",
                iosClientId: "937160071371-dcjiom1f3k4ofdv2h5ffq2sssronae24.apps.googleusercontent.com",
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
        postUserAccount();
        getUserAccount();
        // props.navigation.navigate('MAIN');
    }

    function postUserAccount(){
        fetch(
          'http://192.249.18.179/api/users',
          {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: global.USER_EMAIL,
                nickname: global.USER_NAME
            })
          })
    }

    function getUserAccount(){
        fetch(
            'http://192.249.18.179/api/users/email/'+global.USER_EMAIL,
            {
              method: 'GET',
              headers: {
              'Content-type': 'application/json'
              },
            }).then(data=>data.json())
            .then(json=>{
                global.USER_ID = json.id;
                global.USER_NAME = json.nickname;

                console.log("--------in get user account")
                global.USER_ID = json.id
                global.OWNER = global.USER_ID
                global.OWNER_NAME = json.nickname
                console.log(global.USER_ID)
                console.log(global.OWNER)
                console.log("--------")
                console.log(json)
                console.log("--------end get user account")

                getUserBag();
                fetchData();
                props.navigation.navigate('MAIN');
            })
    }


    function getUserBag(){
        console.log("%%%%%%%%%%%%%%%%%%%%%")        
        fetch(
            'http://192.249.18.179/api/bags/owner/'+global.USER_ID,
            {
              method: 'GET',
              headers: {
              'Content-type': 'application/json'
              },
            }).then(data=>data.json())
            .then(json=>{
                console.log("--------in get user bag")
                console.log("user id:"+global.USER_ID)
                // console.log(json)
                // console.log("--------")
                // console.log(json[0].bag_letter)
                // console.log(json[0].bag_owner)
                // console.log(json[0].id)
                // console.log("--------")
                // console.log(tmpMessage)
                // console.log("--------")
                console.log(json.length)
                if(json.length == 0){
                    console.log("in if stmt")
                    postUserBag()
                }else{
                    console.log("in else stmt")
                    const tmpMessage = json[0].bag_letter
                    getLetter(tmpMessage)
                }
                console.log("--------end get user bag")

            })
    }


    function getLetter(tempMessage){
        console.log("********* " + tempMessage.length)
        console.log("temp Message: " + tempMessage)
        for (i=0; i < tempMessage.length; i++)
        {
            console.log("in for stmt")
            fetch(
                'http://192.249.18.179/api/letters/id/'+tempMessage[i],
                {
                  method: 'GET',
                  headers: {
                  'Content-type': 'application/json'
                  },
                }).then(data=>data.json())
                .then(json=>{
                    console.log("-------in getLetter-------")
                    console.log(json)
                    console.log('json stringify: '+JSON.stringify(json))
                    console.log("--------------------------")
                    global.BAG_MESSAGE.push(json)
                    console.log(global.BAG_MESSAGE)
                    console.log("-------end getLetter-------")
                }
                )
        }
    }

    function postUserBag(){
        fetch(
            'http://192.249.18.179/api/bags',
            {
              method: 'POST',
              headers: {
              'Content-type': 'application/json'
              },
              body: JSON.stringify({
                  bag_owner: global.USER_ID,
                  bag_letter: [],
              })
            })
    }

    const fetchData = () => {
        fetch('http://192.249.18.179/api/msg/to/'+global.USER_ID,
        {
          method: 'GET',
          headers: {
              'Accept': 'application/json'
          },
        }).then(data=>data.json())
        .then(json=>{
            json.map(e=>{
                const {fromId, toId, fromNickname, toNickname, msgContents, id} = e;
                global.fromMsg.push({
                    fromId: fromId,
                    toId: toId,
                    fromNickname: fromNickname,
                    toNickname: toNickname,
                    msgContents: msgContents,
                    id: id,
                })
            })
        });
        fetch('http://192.249.18.179/api/msg/from/'+global.USER_ID,
        {
          method: 'GET',
          headers: {
          },
        }).then(data=>data.json())
        .then(json=>{
            json.map(e=>{
                const {fromId, toId, fromNickname, toNickname, msgContents, id} = e;
                var newJSON = {
                    fromId: fromId,
                    toId: toId,
                    fromNickname: fromNickname,
                    toNickname: toNickname,
                    msgContents: msgContents,
                    id: id,
                }
                global.toMsg.push(newJSON);
            })
        });
      };
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
                    onPress={()=> signInWithGoogleAsync()}
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