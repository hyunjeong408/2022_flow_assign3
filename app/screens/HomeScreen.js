import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity, Modal, Button,ScrollView, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { ScrollView } from 'react-native-gesture-handler';
// import Modal from 'react-native-simple-modal';
import testData from '../assets/testJSON.json';

const data = testData.gift;
var max = parseInt(data.length/8)

const iconList = [];

const image = ({uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"})
// const icon_tiger = {uri: "https://user-images.githubusercontent.com/64190044/149455158-87df0ac3-da23-4b22-bcbe-eea3e04f48db.png"}
// const icon_tiger_glow = {uri: "https://user-images.githubusercontent.com/64190044/149455236-2cf1a4da-4a9b-4db4-b065-90f8d04c0441.png" }
iconList.push({uri: "https://user-images.githubusercontent.com/64190044/149472563-11e12aee-87a5-424e-8634-fad61c99b8b1.png"})
iconList.push({uri: "https://user-images.githubusercontent.com/64190044/149499243-6df12435-e3cd-4a0e-8cd3-6a9e40568493.png"})
iconList.push({uri: "https://user-images.githubusercontent.com/64190044/149500357-bad7502b-11a6-424f-8ede-299ec0d93e5c.png"})
iconList.push({uri: "https://user-images.githubusercontent.com/64190044/149499631-adcff1a4-7c1d-48c6-b72c-8c42e2ecb094.png"})
const Stack = createStackNavigator();

class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style = {styles.container}>
                            <Stack.Navigator>
                                <Stack.Screen name='HomeOrigin' component={HomeScreenOrigin}/>
                                <Stack.Screen name='HomeZoom' component={HomeScreenZoom}/>
                            </Stack.Navigator>
            </View>
        );
    }
}

const HomeScreenOrigin = ({navigation}) => {
    return(
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>

        <TouchableOpacity style= {{ flex: 0.5, alignSelf: 'center'}}
        onPress = {() => navigation.navigate('HomeZoom') }>
        
            <Image source = {require('../assets/main_icon_tiger.png')} style={{flex:1, width:300}} resizeMode= {'contain'}/>

        </TouchableOpacity>

        <TouchableOpacity style= {{ flex: 0.1, alignItems:'flex-end', marginRight: -50, marginBottom: -70}}
        onPress = {() => navigation.navigate('HomeZoom') }>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center'}}>서신 작성하기</Text>
                <Image source = {require('../assets/main_icon_write_letter.png')} style={{height:150}} resizeMode= {'contain'}/>
            </View>

        </TouchableOpacity>

        </ImageBackground>

    )
}

const HomeScreenZoom = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [fromNickname,setFromNickName] = useState("")
    const [contents,setContents] = useState("")

    // const openModal = () => { setShowModal((prev) => !prev);};


    console.log('in home screen zoom')
    console.log(data.length)

    function setButton (kind) {
        console.log("in set button function")
        if (kind === 0){
            return ( 
                (index > 7)
                ?(<TouchableOpacity style={{flex:1, alignItems:'flex-end'}} onPress={() => setIndex(index - 8)}>
                    <Text style={{flex:1,fontSize: 30}}> 이전</Text>
                </TouchableOpacity>)
                : (null)
            
            )
        }
        if (kind === 1){
            console.log(max)
            console.log(index/8)
            return ( 
                (max > (index/8))
                ?(<TouchableOpacity style={{flex:1, alignItems:'flex-start'}} onPress={() => setIndex(index + 8) }>
                    <Text style={{flex:1,fontSize: 30}}> 다음</Text>
                </TouchableOpacity>)
                :(null)
            )
        }
        console.log("outside")
    }

    function returnImage(i) {
        if (index+i < data.length-1){
             if (i ===0 || i===2 ||i === 4 || i === 6){
                return(
                    <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-end'}} onPress={() => {setFromNickName(data[index+i].msg_from_nick); setContents(data[index+i].msg_contents);setModalVisible(true)}}>
                        <Image source = {iconList[data[index+i].icon_id]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                    </TouchableOpacity>
                )
            }
            else{
                return(
                    <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-start', justifyContent: 'flex-end'}} onPress={() => {setFromNickName(data[index+i].msg_from_nick); setContents(data[index+i].msg_contents);setModalVisible(true)}}>
                        <Image source = {iconList[data[index+i].icon_id]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                    </TouchableOpacity>
                )
            }
        }else{
            return(
                <View  style = {{flex:0.2, width: 80, alignSelf:'baseline'}}></View>
            )
        }
        
    }
    
    return(
        <ImageBackground source={image} resizeMode='stretch' style={{flex:1, alignItems:'center'}}>
                <Modal
                    style={{flex:1 ,justifyContent:'center', alignSelf: 'center', alignItems:'center'}}
                    animationType="slide"
                    transparent = {true}
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible(!modalVisible);
                    }}
                >
                    <SafeAreaView style={{flex:0.8,justifyContent: 'center', marginTop: 100}}>
                        <ImageBackground source = {require('../assets/main_icon_letter.png')} style={{flex:1, justifyContent: 'center', resizeMode:'contain'}}>
                            <View style={{flex:0.55}}>
                                <Text style={{flex:0.1,width:200, alignSelf: 'center', fontSize: 17, marginTop:10, marginTop: 10}}>{fromNickname} </Text>
                                <ScrollView style={{flex:1,height:200,width:200, alignSelf: 'center', marginTop:10}}>
                                    <Text style={{flex:1, fontSize: 15}}>{contents}</Text>
                                </ScrollView>
                                <TouchableOpacity style={{flex:0.1 ,width: 200 , alignSelf:'center', justifyContent: 'center'}} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{alignSelf:'center',fontSize: 17}}>닫기</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </SafeAreaView>

            </Modal>

            <ImageBackground source = {require('../assets/main_icon_tiger_glow.png')} style={{flex: 1,width: 700, resizeMode: 'cover', justifyContent: 'flex-start'}}>
                <View style={{flex: 0.85, width:380, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-evenly', flexDirection:'row', marginTop: -60}}>
                    <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                        {returnImage(0)}
                        {returnImage(1)}
                        {returnImage(2)}
                        {returnImage(3)}
                    </View>
                    <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                        {returnImage(4)}
                        {returnImage(5)}
                        {returnImage(6)}
                        {returnImage(7)}
                    </View>
                </View>
                <View style={{flex:0.1, flexDirection: 'row', marginBottom: -50}}>
                    <View style={{flex:0.5,justifyContent:'center'}}>
                        {setButton(0)}
                    </View>

                    <View style={{flex:0.5, justifyContent:'center'}}>
                        <TouchableOpacity style={{flex:1, alignSelf:'center'}} onPress = {() => navigation.navigate('HomeOrigin')}>
                            <Text style={{flex:1, fontSize: 30}}> 마당으로</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.5, justifyContent:'center'}}>
                        {setButton(1)}
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground>
    )
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

export default HomeScreen