import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { Card } from "react-native-elements"

export default class Cards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Study. Play. Destroy.</Text>
        <Card>Testtt</Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  }
})
