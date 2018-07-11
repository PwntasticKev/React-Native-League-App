import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { Card } from "react-native-elements"

export default class Cards extends Component {
  constructor() {
    super()
    this.state = {
      cardFlip: false,
      title: ["Dark Harvest"],
      category: ["Domination"],
      definition: [
        "Champions, large minions, and large monsters drop soul essence on death. Touch souls to absorb them and deal bonus damage on your next attack based on total soul essence collected."
      ]
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
            <Text style={styles.test}>{this.state.title[0]}</Text>
            <Text style={styles.category}>{this.state.category[0]}</Text>
            <Text style={styles.test}>{this.state.definition}</Text>
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
  card: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100,
    left: 105
  },
  imageContainer: {
    flex: 0,
    justifyContent: "center",
    textAlign: "center"
  },
  test: {
    textAlign: "center"
  },
  category: {
    color: "red",
    textAlign: "center",
    fontSize: 22
  }
})
