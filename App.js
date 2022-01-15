import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigators/TabNavigator';
import { useFonts } from 'expo-font';

function App() {
  const [loaded] = useFonts({
    ejr: require('./app/fonts/euljiro.ttf'),
    gowun: require('./app/fonts/gowun.ttf'),
    gowunBold: require('./app/fonts/gowunbold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;