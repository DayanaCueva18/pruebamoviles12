import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export const Pantalla2Screen = () => {

  //hook navegacion 
  const navigation=useNavigation();
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Imagen 2</Text>

        <Image
        source={{
             uri:'https://img.freepik.com/foto-gratis/aislado-feliz-sonriente-perro-fondo-blanco-retrato-2_1562-691.jpg',}}
             style={styles.imagenes}/>
        

        <Button title='Ir a pagina de inicio '
        onPress={()=>navigation.dispatch(CommonActions.navigate({name:'PantallaScreen'}))}/>
    </View>
  )
}
