import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'PantallaScreen'>{};


export const PantallaScreen = ({navigation}: Props) => {

  return (
    

<View style={{flexDirection:'row'}}>
  <Text style={styles.title}>BIENVENIDO</Text>
           <TouchableOpacity style={
            styles.buttonPerson
         }
        onPress={()=>navigation.navigate('Pantalla2Screen')}>
        <Text style={styles.buttonPersonText}>Imagen 1</Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPerson2}
        onPress={()=>navigation.navigate('Pantalla3Screen')}>
        <Text style={styles.buttonPersonText}>Imagen 2</Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.img3}
        onPress={()=>navigation.navigate('PersonaScreen')}>
        <Text style={styles.buttonPersonText}>Mayor o igual </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imag4}
        onPress={()=>navigation.navigate('Pantalla4Screen')}>
        <Text style={styles.buttonPersonText}>Menor o igual </Text>
        </TouchableOpacity>  

        </View>
  )
}
