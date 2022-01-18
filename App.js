import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import LoginStackNavigator from './app/navigators/LoginStackNavigator';

function App() {



  const [loaded] = useFonts({
    ejr: require('./app/fonts/euljiro.ttf'),
    gowun: require('./app/fonts/gowun.ttf'),
    gowunBold: require('./app/fonts/gowunbold.ttf'),
    daegunL: require('./app/fonts/daegunl.ttf'),
    daegunM: require('./app/fonts/daegunm.ttf'),
  });

  
  if (!loaded) {
    return null;
  }
  global.USER_ID = '';
  global.USER_EMAIL = 'defaultEmail';
  global.USER_NAME = 'defaultName';
  global.OWNER = 'Anonymous'
  global.BAG_ID = ''
  global.BAG_MESSAGE = [];

  

  return (
    
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>

  );
}

export default App;