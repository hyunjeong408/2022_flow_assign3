import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigators/TabNavigator';
import { registerRootComponent, useFonts } from 'expo-font';
// import { Font } from 'expo';

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state  = {isReady: false};
//   }
//   async componentDidMount() {
//     await Font.loadAsync({'jsm': require('./app/fonts/jsm.ttf'), 'gowun': require('./app/fonts/gowunbatang.ttf'), 'pretendard': require('./app/fonts/pretendard.ttf')});
//     this.setState({ isReady: true });
//   }
//   render(){
//     if(this.state.isReady) {
//       return (
//         <NavigationContainer>
//           <TabNavigator/>
//         </NavigationContainer>
//       );
//     }
//     else {
//       return <View><Text>Loding...</Text></View>;
//     }
//   }
// }
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;