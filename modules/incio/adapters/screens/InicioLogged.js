import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

export default function Inicio() {
  return (
    <View>
      <Text
          style={styles.textInicio}>
          Instagram
        </Text>

        <Image
          style={styles.img}
          source={require("../../../../assets/bonito.jpg")}
        />
        <View style={styles.infoContainer}>
        <Icon
            type="material-community"
            name="heart-outline"
            color="#000000"
            
          ></Icon>
          <Icon
            type="material-community"
            name="message-arrow-right-outline"
            color="#000000"
          ></Icon>
          <Icon
            type="material-community"
            name="share"
            color="#000000"
          ></Icon>
        </View>
        <View style={styles.infoContainer}>
        <Icon
            type="material-community"
            name="heart"
            color="#000000"
          ></Icon>
          <Text>Hoy es un dia de examen </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInicio:{
    fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'monospace',
      margin: 10
  },
  img: {
    textAlign: 'center',
    width:500,
    height:300
  },
  infoContainer: {
    flexDirection: "row",
    paddingVertical: 2,
    marginHorizontal: 0
  }
})