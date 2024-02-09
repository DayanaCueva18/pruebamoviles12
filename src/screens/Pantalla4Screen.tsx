import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCom } from '../components/Button';




const Pantalla4Screen =() => {
  const[numero1, setNumero1]=useState<number>(0);
  const[numero2, setNumero2]=useState<number>(0);
  const[resultado,setResultado]=useState("")
  const finales=(text:string)=>{
    setNumero1(parseInt(text))
  };
  const finales2=(text:string)=>{
  setNumero2(parseInt(text))}


  const calcularNumeros=()=>{
  let calcular='';
  if(numero1>numero2){
    calcular= `${numero1} es un numero mayor que ${numero2}`;
  }else if(numero1 < numero2){
      calcular=`${numero2} es un numero mayor que ${numero1}`;
    }else {
        calcular=`Los dos numeros son iguales`
      }
      setResultado(calcular);
  }
  return (
    <SafeAreaView>
      <Text style={styles.formulario}> FORMULARIO </Text>
  
  <Text style={styles.contextoo}>Ingresa el primer número </Text>
      <TextInput 
      style={styles.caja}
      keyboardType='numeric'
      onChangeText={finales}/>

<Text style={styles.context}>Ingresa el segundo número </Text>
<TextInput 
style={styles.caja2}
      keyboardType='numeric'
      onChangeText={finales2}/>
        
<TouchableOpacity onPress={calcularNumeros} >
  <Text style={styles.calcular}>Calcular</Text>
</TouchableOpacity>
<Text style={styles.final}>{resultado}</Text>

           
      </SafeAreaView>

      
  )
     
    }

  

export default Pantalla4Screen
