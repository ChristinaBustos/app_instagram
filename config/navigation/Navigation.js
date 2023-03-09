import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import InicioStack from '../stack/InicioStack'
import BuscadorStack from '../stack/BuscadorStack'
import PerfilStack from '../stack/PerfilStack'

const Tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown:false
                })}>
                <Tab.Screen 
                name='inicio'
                options={{title: 'Home'}}
                component={InicioStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
                <Tab.Screen 
                name='buscador'
                options={{title: 'Buscador'}}
                component={BuscadorStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
                <Tab.Screen 
                name='perfil'
                options={{title: 'Perfil'}}
                component={PerfilStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
            </Tab.Navigator>
        </NavigationContainer>
  )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'perfil':
            iconName = 'account-circle-outline'
            break;
        case 'buscador':
            iconName = 'account-search-outline'
            break
        case 'inicio':
            iconName = 'home-circle-outline'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}