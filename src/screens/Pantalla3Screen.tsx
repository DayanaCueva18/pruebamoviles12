import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';
import { Image } from 'react-native';

interface Props extends StackScreenProps<RootStackParamList,'Pantalla3Screen'>{};

export const Pantalla3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Mayor o igual</Text>
        <Image
        source={{
             uri:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089934470.jpg',}}
             style={styles.imagenes}/>

        <Button title='Regresar'
        onPress={()=>navigation.pop()}/>
        
    </View>
  )
}
