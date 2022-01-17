import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity, Modal, Button,ScrollView, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const image = ({uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"})

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
        multiline={true}
      />
    );
  }
const GiftMessageScreen = ({navigation,route}) => {
    const {index} = route.params;
    // const [titleValid,setTitlteValid] = useState(false);
    // const titleChangeHandler = (text) => {
    //     if(text.trim().length === 0){
    //         setTitlteValid(false);
    //     } else{
    //         setTitlteValid(true);
    //     }
    //     setTitlteValid(text)
    // }
    const [messageNick, setMessageNick] = useState()
    const [messageContents, setMessageContents] = useState()

    return(
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                <View style={{flex:1,justifyContent: 'center'}}>
                    <ImageBackground source = {require('../assets/main_icon_letter.png')} style={{flex:0.9, justifyContent: 'center', resizeMode:'contain', marginTop:50}}>
                        <View style={{flex:0.55}}>
                                <TextInput style={{flex:0.15,width:200, alignSelf: 'center', fontSize: 27, marginTop:10, marginTop: 10, fontFamily:'daegunM'}} maxLength={7} onChangeText={setMessageNick} value={messageNick} placeholder='닉네임을 입력'></TextInput>
                                <View style={{flex:1,height:200,width:200, alignSelf: 'center', marginTop:10,fontFamily:'gowun'}}>
                                    <UselessTextInput onChangeText={setMessageContents} value={messageContents} placeholder='내용을 입력해주세여'>
                                    </UselessTextInput>
                                </View>

                                <TouchableOpacity style={{flex:0.2 ,width: 200 , alignSelf:'center', justifyContent: 'center',marginTop:20}} onPress={() => {}}>
                                    <Text style={{alignSelf:'center',fontSize: 25, fontFamily:'daegunM'}}>전송</Text>
                                </TouchableOpacity>
                            </View>
                    </ImageBackground>
                    <View style= {{flex:0.2,alignItems:'center', justifyContent:'space-evenly',flexDirection:'row'}}>
                        <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center',fontFamily:'daegunM'}}>"내용을 작성하셈"</Text>
                        <Image source = {global.iconList[index]}  style = {{flex:0.3,height:80}} resizeMode= {'contain'}/>
                    </View>
                </View>

        </ImageBackground>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    icon: {
        width: 5,
        height: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default GiftMessageScreen