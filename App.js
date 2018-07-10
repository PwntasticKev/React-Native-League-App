import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import Header from "./Components/Header"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <Text>testing i hate react native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 32,
    paddingRight: 32,
    width: "100%"

    // alignItems: "center"
  },
  header: {
    height: 32,
    width: "100%"
  }
})
