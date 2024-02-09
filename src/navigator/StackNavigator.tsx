import { createStackNavigator } from '@react-navigation/stack';
import { PantallaScreen} from '../screens/PantallaScreen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import Pantalla4Screen from '../screens/Pantalla4Screen';

export  type RootStackParamList={
    PantallaScreen: undefined,
    Pantalla2Screen: undefined,
    Pantalla3Screen:undefined,
    PersonaScreen: undefined,
    Pantalla4Screen:undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle:{
            backgroundColor:'#DEAEFA',
            elevation:0
        },
        cardStyle:{
            backgroundColor:'white'
        }
    }}>
    
      <Stack.Screen name="PantallaScreen" options={{title:'Prueba'}} component={PantallaScreen} />
      <Stack.Screen name="Pantalla2Screen" options={{title:'Pantalla 2'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3Screen" options={{title:'Pantalla 3'}} component={Pantalla3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title:'pantalla3'}} component={PersonaScreen} />
      <Stack.Screen name="Pantalla4Screen" options={{title:'Pantalla4'}} component={Pantalla4Screen} />
      
    </Stack.Navigator>
  );
}