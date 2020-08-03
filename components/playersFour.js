import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, ScrollView, Component, TouchableOpacity, Alert} from 'react-native';
import PlayersData from '../components/data.json';
import Questions from '../components/questions.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));}
var picker = Questions[getRandomInt(3)];

class PlayersFour extends React.Component{
  render() {
    return(
      <SafeAreaView>
        <ScrollView>
          <Image source={{uri:picker.questionimage}} style = {styles.imageStyle}/>
        </ScrollView>
        <View>
            <Text style={styles.question}>Which player is this?</Text>

            <View style={styles.button}><Button color="#fff" title={picker.firstanswer} onPress={() => {if (picker.firstanswer == picker.correctanswer) {alert('Correct')} else {alert('Nope')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={picker.secondanswer} onPress={() => {if (picker.secondanswer == picker.correctanswer) {alert('Correct')} else {alert('Nope')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={picker.thirdanswer} onPress={() => {if (picker.thirdanswer == picker.correctanswer) {alert('Correct')} else {alert('Nope')}} }/></View>
            <View style={styles.button}><Button color="#fff" title={picker.fourthanswer} onPress={() => {if (picker.fourthanswer == picker.correctanswer) {alert('Correct')} else {alert('Nope')}} }/></View>
        </View>
        <View style={styles.next}><Button title="Next Question" onPress={() => {<PlayersThree/>} }/></View>
      </SafeAreaView>

    )
  }
};

export default PlayersFour


const styles = StyleSheet.create({
  imageStyle:{
   width: 1000,
   height: 300,
   resizeMode: 'contain',
},


   question:{
     marginTop: 20,
     fontSize: 20,
     paddingLeft: 65,
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
    marginTop: 40,
  },
})
