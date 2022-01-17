import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity, Modal, Button,ScrollView, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { ScrollView } from 'react-native-gesture-handler';
// import Modal from 'react-native-simple-modal';
import testData from '../assets/testJSON.json';
const image = ({uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"})


const GiftDetailScreen = ({navigation,route}) => {

    const {index} = route.params;

    function returnDetailImage(i) {

        console.log("index")
        console.log(index)
        return(
            <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('GiftMessage',{index: i});}}>
                    <Image source = {global.iconList[i]}  style = {{flex:0.7}} resizeMode= {'contain'}/>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('GiftMessage',{index: i+1});}}>
                    <Image source = {global.iconList[i+1]}  style = {{flex:0.7}} resizeMode= {'contain'}/>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('GiftMessage',{index: i+2});}}>
                    <Image source = {global.iconList[i+2]}  style = {{flex:0.7}} resizeMode= {'contain'}/>
                </TouchableOpacity>                   
            </View> 
            )
    }
    return(
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
                <View style={{flex:1,justifyContent: 'center'}}>
                    <ImageBackground source = {require('../assets/main_icon_letter.png')} style={{flex:0.9, justifyContent: 'center', resizeMode:'contain',marginTop:50}}>
                        <View style={{flex: 0.6, width:250, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-evenly',marginTop:40,marginLeft:-10, flexDirection:'row'}}>
                            <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                                {returnDetailImage(index)}
                            </View> 
                            <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                                {returnDetailImage(index+3)}
                            </View>
                        </View>
                    </ImageBackground>
                    <View style= {{flex:0.2,alignItems:'center', justifyContent:'space-evenly',flexDirection:'row'}}>
                        <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center',fontFamily:'daegunM'}}>"골라"</Text>
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

export default GiftDetailScreen