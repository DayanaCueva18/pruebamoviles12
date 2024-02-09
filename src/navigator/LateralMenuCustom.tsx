import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { View, useWindowDimensions,Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const LateralMenuCustom=()=>{

  const{width}=useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:(width>=768)?'permanent':'front'
    }}
    drawerContent={(props)=><MenuItems{...props}/>}>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}}component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{title:'Setings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const MenuItems=({navigation}:DrawerContentComponentProps)=>{
    return(
   <DrawerContentScrollView>

    <View style={styles.avatarContainer}>


             </View>

             <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton}
                onPress={()=>navigation.navigate('StackNavigator')}>
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}
                onPress={()=>navigation.navigate('SettingScreen')}>
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
    
    
    </View>
   </DrawerContentScrollView>
    )
}