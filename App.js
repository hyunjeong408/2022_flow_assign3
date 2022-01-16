import React from 'react';
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

  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>

  );
}

export default App;