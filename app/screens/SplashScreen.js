import React from 'react';
import LottieView from 'lottie-react-native';
import color from '../config/color';

function SplashScreen(props) {
    return (
        <LottieView
        resizeMode='cover'
        style={{bottom: 20, backgroundColor: color.tigerorange}}
        source={require('../assets/splashm.json')}
        autoPlay
        loop
        />
    );
}

export default SplashScreen;