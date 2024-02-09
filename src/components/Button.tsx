import React from 'react'
import { TouchableOpacity, View } from 'react-native'
interface Button{
    title:string;
    onPress:()=>void;
}
export const ButtonCom = ({title,onPress}:Button) => {
  return (
    <TouchableOpacity onPress={onPress}>{title}</TouchableOpacity>
  )
}

