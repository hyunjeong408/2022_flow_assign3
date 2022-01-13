import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ChatScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>ChatTab</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ChatScreen;