import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, Image } from "react-native"

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/blue-Essence_icon.png")} />
        <Text>Mastery Master!!</Text>
        <Image source={require("./img/blue-Essence_icon.png")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 16,
    width: "100%",
    backgroundColor: "ghostwhite"
  }
})
