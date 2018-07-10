import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mastery Master!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    color: "red",
    height: 16,
    width: "100%"
  }
})
