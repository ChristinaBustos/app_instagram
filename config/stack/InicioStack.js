import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../../modules/incio/adapters/screens/Inicio";

const Stack = createNativeStackNavigator();
export default function InicioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#E366ED" },
      }}
    >
      <Stack.Screen
        name="inicioStack"
        options={{ title: "Inicio" }}
        component={Inicio}
      />
    </Stack.Navigator>
  );
}
