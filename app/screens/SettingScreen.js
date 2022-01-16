import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, View, Text, StatusBar, ImageBackground, Platform, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

function SettingScreen({navigation}){
    // const {status, msg} = route.params;
    return(
        <ImageBackground
        resizeMode='stretch'
        style={styles.background}
        source={require("../assets/main_background.png")}
        >
            <View style={styles.backIconView}>
                <Icon name={'keyboard-backspace'} size={30} onPress={()=>{navigation.goBack()}}/>
            </View>

            <View style={styles.letterView}>
                <Text>SettingScreen</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
    },
    backIconView: {
        marginTop: StatusBarHeight+10,
        height: '5%',
        paddingLeft: 10,
    },
    letterView: {
        width: '100%',
        height: '70%',
    },
    
})

export default SettingScreen;