import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, Button, Image, Icon } from "@rneui/base";

export default function Buscador() {
  return (
    <View>
      <Input
        placeholder="Buscador"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="card-search"
            color="#000000"
          ></Icon>
        }
      />
      <View style={styles.infoContainer}>
        <Image
          style={styles.img}
          source={require("../../../../assets/bo.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../../../../assets/otro.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../../../../assets/suke.jpg")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Image
          style={styles.img}
          source={require("../../../../assets/bo.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../../../../assets/otro.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../../../../assets/suke.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 2,
  },
  img: {
    width: 150,
    height: 150,
  },
});
