import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Buscador from '../../modules/buscador/adapters/screens/Buscador'

const Stack = createNativeStackNavigator()
export default function BuscadorStack() {
  return (
    <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#BE66ED' }
            }}>
            <Stack.Screen
                name='buscadorStack'
                options={{ title: 'Buscar' }}
                component={Buscador}
            />
        </Stack.Navigator>
  )
}