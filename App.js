import React from "react"
import { StyleSheet, Text, View, TextInput, Card } from "react-native"
import Header from "./Components/Header"
import Cards from "./Components/Cards/Cards"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <Cards />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 48,
    width: "100%"

    // alignItems: "center"
  },
  header: {
    height: 32,
    width: "100%"
  }
})
