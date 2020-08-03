import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, ScrollView, Component, TouchableOpacity, Alert} from 'react-native';
import PlayersData from '../components/data.json';
import Questions from '../components/questions.json';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));}

var picker = Questions[getRandomInt(5)];

class PlayersThree extends React.Component{
constructor(){
  super();
  this.state = {
    title1 : picker.firstanswer,
    title2 : picker.secondanswer,
    title3 : picker.thirdanswer,
    title4 : picker.fourthanswer,
    picture: picker.questionimage,
    correct: picker.correctanswer
  }
  this.Onpressbutton = this.Onpressbutton.bind(this);
}

Onpressbutton() {
  var picker2 = Questions[getRandomInt(5)];
  this.setState({
    title1 : picker2.firstanswer,
    title2 : picker2.secondanswer,
    title3 : picker2.thirdanswer,
    title4 : picker2.fourthanswer,
    picture: picker2.questionimage,
    correct: picker2.correctanswer
  })
}


  render() {
    return(
      <SafeAreaView>
      <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
        <Image source={{uri:this.state.picture}} style={styles.imageStyle}/>
      </ScrollView>
        <View>
            <Text style={styles.question}>Name that player</Text>
            <View style={styles.button}><Button color="#fff" title={this.state.title1} onPress={() => {if (this.state.title1 == this.state.correct) {alert('Correct!')} else {alert('Try Again')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={this.state.title2} onPress={() => {if (this.state.title2 == this.state.correct) {alert('Correct!')} else {alert('Try Again')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={this.state.title3} onPress={() => {if (this.state.title3 == this.state.correct) {alert('Correct!')} else {alert('Try Again')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={this.state.title4} onPress={() => {if (this.state.title4 == this.state.correct) {alert('Correct!')} else {alert('Try Again')}} }/></View>
        </View>

        <View style={styles.next}><Button title="Next Question" onPress={this.Onpressbutton}/></View>
      </SafeAreaView>

    )
  }
};

export default PlayersThree


const styles = StyleSheet.create({
  imageStyle:{
   width: 320,
   height: 220,
   resizeMode: "cover"
},


   question:{
     marginTop: 10,
     fontSize: 20,
     paddingLeft: 75,
     marginBottom: 25,
     alignItems: "center",
  },

  text:{
    fontSize: 20,
  },

  button:{
    marginTop: 10,
    backgroundColor: "#0f88fa",
    borderRadius: 12,
  },

  next: {
    marginTop: 50,
    marginBottom: 20,
  },
})
