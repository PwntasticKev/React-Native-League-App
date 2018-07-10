import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { Card } from "react-native-elements"

export default class Cards extends Component {
  constructor() {
    super()
    this.state = {
      cardFlip: false
    }
  }

  flip(bool) {
    this.setState({
      cardFlip: !bool
    })
  }
  render() {
    console.log(this.state.cardFlip)
    return (
      <View>
        <Text style={styles.title}>Study. Play. Destroy.</Text>
        <Card style={styles.card} onClick={_ => this.flip(this.state.cardFlip)}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../img/domination-hood.png")}
            />
            <Text>TEXTTT</Text>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  card: {},
  image: {
    height: 100,
    width: 100
  },
  imageContainer: {
    // flex: 1,
    // justifyContent: "center"
  }
})
