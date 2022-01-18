import React, { Component, useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity, Modal, Button,ScrollView, SafeAreaView, Animated} from 'react-native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import testData from '../assets/testJSON.json';
import GiftScreen from'./GiftScreen';
import GiftDetailScreen from './GiftDetailScreen';
import GiftMessageScreen from './GiftMessageScreen';
const image = ({uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"})


// global.OWNER = global.USER_ID


/*link with SERVER*/

// function getBagIdByUserID(){
//     fetch(
//         'http://192.249.18.179/api/users/id/'+global.OWNER,
//         {
//           method: 'GET',
//           headers: {
//           'Content-type': 'application/json'
//           },
//         }).then(data=>data.json())
//         .then(json=>{
//             BAG_ID = json.id;
//             postUserBag()
//             console.log(json.id);
//         })
// }

// function getUserBag(){
//     fetch(
//         'http://192.249.18.179/api/bags/owner/'+global.OWNER,
//         {
//           method: 'GET',
//           headers: {
//           'Content-type': 'application/json'
//           },
//         }).then(data=>data.json())
//         .then(json=>{
//             console.log("--------in get user bag")

//                 console.log(global.OWNER)
//                 console.log("--------")

//                 console.log(json)
//                 console.log("--------")

//                 setOwnerLetters(json.bag_letter)
//                 console.log(ownerLetters)

//             console.log("--------end get user bag")

//         })
// }





console.log('#######BAG_MESSAGE: '+global.BAG_MESSAGE)



// var max = parseInt((global.BAG_MESSAGE).length/8);
var max = 1;

const Stack = createStackNavigator();

  

class HomeScreen extends Component {

    constructor(props){
        super(props);
        // this.state={data:global.BAG_MESSAGE}
        // max = parseInt(this.state.global.BAG_MESSAGE/8);
    }


    render(){
        return(
            <View style = {styles.container}>
                            <Stack.Navigator>
                                <Stack.Screen name='HomeOrigin' component={HomeScreenOrigin} options={{headerShown: false}}/>
                                <Stack.Screen name='HomeZoom' component={HomeScreenZoom} options={{headerShown: false}}/>
                                <Stack.Screen name='Gift' component={GiftScreen} options={{headerShown: false}}/>
                                <Stack.Screen name='GiftDetail' component={GiftDetailScreen} options={{headerShown: false}}/>
                                <Stack.Screen name='GiftMessage' component={GiftMessageScreen} options={{headerShown: false}}/>

                            </Stack.Navigator>
            </View>
        );
    }
}

const HomeScreenOrigin = ({navigation}) => {
    // const [ownerLetters,setOwnerLetters] = useState();

    iconList = [require('../assets/samsung_mouse.png'),require('../assets/magic_mouse.png'),require('../assets/magic_mouse_black.png'),require('../assets/logi_mouse_blue.png'),
require('../assets/logi_mouse_black.png'),require('../assets/logi_mouse.png'),require('../assets/ipad_silver.png'),require('../assets/ipad_black.png'),
require('../assets/tab_blue.png'),require('../assets/tab_bronze.png'),require('../assets/pencil_1.png'),require('../assets/pencil_2.png'),
require('../assets/airpod_max.png'),require('../assets/airpod_pro.png'),require('../assets/airpod_2.png'),require('../assets/airpod_3.png'),
require('../assets/buds_pro.png'),require('../assets/buds_bean.png'),require('../assets/hp.png'),require('../assets/imac.png'),
require('../assets/mac_mini.png'),require('../assets/iphone.png'),require('../assets/galaxy.png'),require('../assets/watch.png')];

    function isOwner () {


        if (global.OWNER == global.USER_ID){
            return(
                <TouchableOpacity style= {{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center',fontFamily:'daegunM', marginRight:-20}}>"내 복주머니"</Text>
                        <Image source = {require('../assets/main_icon_write_letter.png')} style={{height:150}} resizeMode= {'contain'}/>
                    </View>
                </TouchableOpacity>
            );
        } else{
            console.log("in else!!")
            return(
                <TouchableOpacity style= {{flex: 1}}
                onPress = {() => navigation.navigate('Gift') }>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style= {{fontSize:30, alignSelf:'center', justifyContent:'center',fontFamily:'daegunM', marginRight:-20}}>"서신 작성하기"</Text>
                        <Image source = {require('../assets/main_icon_write_letter.png')} style={{height:150}} resizeMode= {'contain'}/>
                    </View>
                </TouchableOpacity>
                );
        }
    }

    return(
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>

        <View style={{ marginTop:-100,marginBottom:100,marginLeft:15}}>
            <Text style= {{fontSize:20,fontFamily:'gowunBold'}}>"{global.USER_NAME}"님의 복주머니</Text>
        </View>
        <TouchableOpacity style= {{ flex: 0.5, alignSelf: 'center'}}
        onPress = {() => navigation.navigate('HomeZoom') }>
        
            <Image source = {require('../assets/main_icon_tiger.png')} style={{flex:1, width:300}} resizeMode= {'contain'}/>

        </TouchableOpacity>
        <View style= {{ flex: 0.1, alignItems:'flex-end', marginRight: -50, marginBottom: -70}}> 
            {isOwner()}
        </View>

        </ImageBackground>

    )
}

const HomeScreenZoom = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [fromNickname,setFromNickName] = useState("")
    const [contents,setContents] = useState("")

    // const openModal = () => { setShowModal((prev) => !prev);};



    function setButton (kind) {
        if (kind === 0){
            return ( 
                (index > 7)
                ?(<TouchableOpacity style={{flex:0.6, alignItems:'flex-end',backgroundColor:'white',border:5,borderRadius:5, opacity:0.9, padding:3}} onPress={() => setIndex(index - 8)}>
                    <Text style={{flex:1,fontSize: 30, fontFamily:'daegunM'}}>이전</Text>
                </TouchableOpacity>)
                : (null)
            
            )
        }
        if (kind === 1){

            return ( 
                (max > (index/8))
                ?(<TouchableOpacity style={{flex:0.6, alignItems:'flex-start',backgroundColor:'white',border:5,borderRadius:5, opacity:0.9, padding:3}} onPress={() => setIndex(index + 8) }>
                    <Text style={{flex:1,fontSize: 30, fontFamily:'daegunM'}}>다음</Text>
                </TouchableOpacity>)
                :(null)
            )
        }
    }

    function returnImage(i) {
        if (global.OWNER == global.USER_ID){
            console.log("**************######" + (index+i))
            console.log("**************######" + (global.BAG_MESSAGE.length))
            if (index+i < global.BAG_MESSAGE.length){
                if (i ===0 || i===2 ||i === 4 || i === 6){
                   console.log("in0248")
                   console.log("iconList: "+ iconList)
                //    console.log("in0248")

   
                   return(
                       <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-end'}} onPress={() => {setFromNickName(global.BAG_MESSAGE[index+i].santa_nickname); setContents(global.BAG_MESSAGE[index+i].bag_contents);setModalVisible(true)}}>
                           <Image source = {iconList[global.BAG_MESSAGE[index+i].bag_icon]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                       </TouchableOpacity>
                   )
               }
               else{
                   console.log("in not 0248")
                   return(
                       <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-start', justifyContent: 'flex-end'}} onPress={() => {setFromNickName(global.BAG_MESSAGE[index+i].bag_contents); setContents(global.BAG_MESSAGE[index+i].bag_contents);setModalVisible(true)}}>
                           <Image source = {iconList[global.BAG_MESSAGE[index+i].bag_icon]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                       </TouchableOpacity>
                   )
               }
           }else{
               console.log("in else stmt")
               return(
                   <View  style = {{flex:0.2, width: 80, alignSelf:'baseline'}}></View>
               )
           }
        }else {
            if (index+i < global.BAG_MESSAGE.length-1){
                if (i ===0 || i===2 ||i === 4 || i === 6){
                   console.log("in0248")   
                   return(
                       <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-end'}}>
                           <Image source = {iconList[global.BAG_MESSAGE[index+i].bag_icon]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                       </TouchableOpacity>
                   )
               }
               else{
                   console.log("in not 0248")
                   return(
                       <TouchableOpacity style={{flex:0.2, width: 80, alignSelf:'flex-start', justifyContent: 'flex-end'}}>
                           <Image source = {iconList[global.BAG_MESSAGE[index+i].bag_icon]}  style = {{flex: 1, width:80}} resizeMode= {'contain'}/>
                       </TouchableOpacity>
                   )
               }
           }else{
               console.log("in else stmt")
               return(
                   <View  style = {{flex:0.2, width: 80, alignSelf:'baseline'}}></View>
               )
           }

        }

        
    }
    
    return(
        
        <ImageBackground source={image} resizeMode='stretch' style={{flex:1, alignItems:'center'}}>
                <Modal
                    style={{flex:1 ,justifyContent:'center', alignSelf: 'center', alignItems:'center'}}
                    animationType="fade"
                    transparent = {true}
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible(!modalVisible);
                    }}
                >
                    <SafeAreaView style={{flex:0.8,justifyContent: 'center', marginTop: 100}}>
                        <ImageBackground source = {require('../assets/main_icon_letter.png')} style={{flex:1, justifyContent: 'center', resizeMode:'contain'}}>
                            <View style={{flex:0.55}}>
                                <Text style={{flex:0.15,width:200, alignSelf: 'center', fontSize: 27, marginTop:10, marginTop: 10, fontFamily:'daegunM'}}>{fromNickname} </Text>
                                <ScrollView style={{flex:1,height:200,width:200, alignSelf: 'center', marginTop:10}}>
                                    <Text style={{flex:1, fontSize: 15, fontFamily:'gowun'}}>{contents}</Text>
                                </ScrollView>
                                <TouchableOpacity style={{flex:0.15 ,width: 200 , alignSelf:'center', justifyContent: 'center',marginTop:20}} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{flex:1,alignSelf:'center',fontSize: 25, fontFamily:'daegunM'}}>닫기</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </SafeAreaView>

            </Modal>

            <ImageBackground source = {require('../assets/main_icon_tiger_glow.png')} style={{flex: 1,width: 700, resizeMode: 'cover', justifyContent: 'flex-start'}}>
                <View style={{flex: 0.95, width:380, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-evenly', flexDirection:'row',marginBottom:50}}>
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
                <View style={{flex:0.1, flexDirection: 'row'}}>
                    <View style={{flex:0.5,justifyContent:'center'}}>
                        {setButton(0)}
                    </View>

                    <View style={{flex:0.5, justifyContent:'center'}}>
                        <TouchableOpacity style={{flex:0.6, alignSelf:'center',backgroundColor:'white',border:5,borderRadius:5, opacity:0.9, padding:3}} onPress = {() => navigation.navigate('HomeOrigin')}>
                            <Text style={{flex:1, fontSize: 30,fontFamily:'daegunM'}}>"마당으로"</Text>
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