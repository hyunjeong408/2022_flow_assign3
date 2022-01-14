import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground,Image,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const image = {uri: "https://user-images.githubusercontent.com/64190044/149326914-27e77dc8-0160-433b-823d-4eda9d0e6258.png"}
// const icon_tiger = {uri: "https://user-images.githubusercontent.com/64190044/149455158-87df0ac3-da23-4b22-bcbe-eea3e04f48db.png"}
// const icon_tiger_glow = {uri: "https://user-images.githubusercontent.com/64190044/149455236-2cf1a4da-4a9b-4db4-b065-90f8d04c0441.png" }
const icon_magic_mouse = {uri: "https://user-images.githubusercontent.com/64190044/149472563-11e12aee-87a5-424e-8634-fad61c99b8b1.png"}
const icon_samsung_mouse = {uri: "https://user-images.githubusercontent.com/64190044/149499243-6df12435-e3cd-4a0e-8cd3-6a9e40568493.png"}
const icon_logi_mouse_black = {uri: "https://user-images.githubusercontent.com/64190044/149500357-bad7502b-11a6-424f-8ede-299ec0d93e5c.png"}
const icon_logi_mouse = {uri: "https://user-images.githubusercontent.com/64190044/149499631-adcff1a4-7c1d-48c6-b72c-8c42e2ecb094.png"}
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

        <TouchableOpacity style= {{ flex: 0.5}}
        onPress = {() => navigation.navigate('HomeZoom') }>
        
            <Image source = {require('../assets/main_icon_tiger.png')} style={{flex:1, width:300}} resizeMode= {'contain'}/>

        </TouchableOpacity>

        </ImageBackground>

    )
}

const HomeScreenZoom = ({navigation}) => {
    return(
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>

            <ImageBackground source = {require('../assets/main_icon_tiger_glow.png')} style={{flex: 1,width: 700, resizeMode: 'cover', justifyContent: 'flex-start'}}>
                <View style={{flex: 0.85, width:380, alignItems: 'center', alignSelf: 'center', justifyContent: 'space-evenly', flexDirection:'row', marginTop: -60}}>
                    <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                        <Image source = {icon_logi_mouse} style={{flex:0.2, width: 80, alignSelf:'baseline'}} resizeMode= {'contain'}/>
                        <Image source = {icon_samsung_mouse} style={{flex:0.2, width: 80, alignSelf: 'flex-end'}} resizeMode= {'contain'}/>
                        <Image source = {icon_logi_mouse_black} style={{flex:0.2, width: 80}} resizeMode= {'contain'}/>
                        <Image source = {icon_magic_mouse} style={{flex:0.2, width: 80, alignSelf: 'baseline'}} resizeMode= {'contain'}/>
                    </View>
                    <View style = {{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center'}}>
                        <Image source = {icon_magic_mouse} style={{flex:0.2, width: 80}} resizeMode= {'contain'}/>
                        <Image source = {icon_samsung_mouse} style={{flex:0.2, width: 80, alignSelf:'flex-end'}} resizeMode= {'contain'}/>
                        <Image source = {icon_samsung_mouse} style={{flex:0.2, width: 80, alignSelf: 'baseline'}} resizeMode= {'contain'}/>
                        <Image source = {icon_logi_mouse} style={{flex:0.2, width: 80}} resizeMode= {'contain'}/>
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
        alignItems: 'center',
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