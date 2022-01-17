import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import LoginStackNavigator from './app/navigators/LoginStackNavigator';

function App() {

  global.iconList = [];

  global.iconList.push(require('./app/assets/samsung_mouse.png'))
  global.iconList.push(require('./app/assets/magic_mouse.png'))
  global.iconList.push(require('./app/assets/magic_mouse_black.png'))
  global.iconList.push(require('./app/assets/logi_mouse_blue.png'))
  global.iconList.push(require('./app/assets/logi_mouse_black.png'))
  global.iconList.push(require('./app/assets/logi_mouse.png'))

  global.iconList.push(require('./app/assets/ipad_silver.png'))
  global.iconList.push(require('./app/assets/ipad_black.png'))
  global.iconList.push(require('./app/assets/tab_blue.png'))
  global.iconList.push(require('./app/assets/tab_bronze.png'))
  global.iconList.push(require('./app/assets/pencil_1.png'))
  global.iconList.push(require('./app/assets/pencil_2.png'))

  global.iconList.push(require('./app/assets/airpod_max.png'))
  global.iconList.push(require('./app/assets/airpod_pro.png'))
  global.iconList.push(require('./app/assets/airpod_2.png'))
  global.iconList.push(require('./app/assets/airpod_3.png'))
  global.iconList.push(require('./app/assets/buds_pro.png'))
  global.iconList.push(require('./app/assets/buds_bean.png'))

  global.iconList.push(require('./app/assets/hp.png'))
  global.iconList.push(require('./app/assets/imac.png'))
  global.iconList.push(require('./app/assets/mac_mini.png'))
  global.iconList.push(require('./app/assets/iphone.png'))
  global.iconList.push(require('./app/assets/galaxy.png'))
  global.iconList.push(require('./app/assets/watch.png'))

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

  return (
    
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>

  );
}

export default App;