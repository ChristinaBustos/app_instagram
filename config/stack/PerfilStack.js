import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Perfil from '../../modules/perfil/adapters/screens/Perfil'

const Stack = createNativeStackNavigator()
export default function PerfilStack() {
  return (
    <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E366ED' }
            }}>
            <Stack.Screen
                name='PerfiltStack'
                options={{ title: 'Perfil' }}
                component={Perfil}
            />
        </Stack.Navigator>
  )
}