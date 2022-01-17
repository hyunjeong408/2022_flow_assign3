import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity, Modal, Button,ScrollView, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { ScrollView } from 'react-native-gesture-handler';
// import Modal from 'react-native-simple-modal';
import testData from '../assets/testJSON.json';
const image = ({uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"})




const GiftScreen = ({navigation}) => {

    function returnImage(i) {
        return(
                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('GiftDetail',{index: i});}}>
                    <Image source = {global.iconList[i]}  style = {{flex:0.7}} resizeMode= {'contain'}/>
                </TouchableOpacity>
        )
    }

        return(
            <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                    <View style={{flex:1,justifyContent: 'center'}}>
                        <TouchableOpacity style={{flex:0.17, justifyContent:'flex-end', marginLeft:30}} onPress={()=>{navigation.goBack()}}>
                            <Text style={{fontSize:30,fontFamily:'daegunM'}}>이전으로</Text>
                        </TouchableOpacity>
                        <ImageBackground source = {require('../assets/main_icon_letter.png')} style={{flex:0.9, justifyContent: 'center', resizeMode:'contain'}}>
                            <View style={{flex: 0.6, width:250, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-evenly',marginTop:40,marginLeft:-10, flexDirection:'row'}}>
                                <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                                    {returnImage(0)}
                                    {returnImage(6)}
                                </View> 
                                <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                                    {returnImage(12)}
                                    {returnImage(18)}
                                </View>
                            </View>
                        </ImageBackground>
                        <View style= {{flex:0.2,alignItems:'center', justifyContent:'space-evenly',flexDirection:'row'}}>
                            <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center',fontFamily:'daegunM'}}>"원하는 선물"</Text>
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

export default GiftScreen