import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
// import { StackNavigator } from './src/navigator/StackNavigator';
//import { LateralMenu } from './src/navigator/LateralMenu';
import { LateralMenuCustom } from './src/navigator/LateralMenuCustom';

const App = () => {
  return (
   <NavigationContainer>
     {/* <StackNavigator/>  */}
    {/* <LateralMenu/> */}
    <LateralMenuCustom/>
   </NavigationContainer>
  )
}

export default App;