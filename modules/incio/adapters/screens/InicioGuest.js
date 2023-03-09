import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function InicioGuest() {
  return (
    <View>
      <Text
          style={styles.createAccount}>
          Te invitamos que inicies tu sesión
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  createAccount:{
    fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'monospace',
      margin: 10
  }

});