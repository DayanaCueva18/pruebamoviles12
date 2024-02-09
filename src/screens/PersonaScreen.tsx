import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler'


export const PersonaScreen = () => {
    const[numero1, setNumero1]=useState(0);
  const[numero2, setNumero2]=useState(0);
  const[resultad,setResultado]=useState<string>("")
  const ultimo=(text:string)=>{
    setNumero1(parseInt(text))
  };
  const ultimo2=(text:string)=>{
  setNumero2(parseInt(text))}



  const calcularlosNumeros=()=>{
  let calcular='';
  if(numero1>numero2){
    calcular= `${numero1} es un numero mayor que ${numero2}`;} else if( numero1 < numero2){
      calcular=`${numero2} es un numero mayor que ${numero1}`;}else {
        calcular=`Los dos numeros son iguales`
      }
      setResultado(calcular)
    }
  return (
    

       <SafeAreaView>

        <Text style={styles.formulario}> FORMULARIO </Text>
  
  <Text style={styles.contextoo}>Ingresa el pimer número </Text>
      <TextInput 
      style={styles.caja}
      keyboardType='numeric'
      onChangeText={ultimo}/>

<Text style={styles.context}>Ingresa el segundo número  </Text>
<TextInput 
style={styles.caja2}
      keyboardType='numeric'
      onChangeText={ultimo2}/>

<TouchableOpacity onPress={calcularlosNumeros} >
  <Text style={styles.calcular}>Calcular</Text>
</TouchableOpacity>
<Text style={styles.final}>{resultad}</Text>

      </SafeAreaView>

  

      
  )
}






