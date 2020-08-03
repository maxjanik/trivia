import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, ScrollView, Component, TouchableOpacity} from 'react-native';
import data from './components/data';
import Players from './components/players';
import PlayersTwo from './components/playersTwo';
import PlayersThree from './components/playersThree';


export default class App extends React.Component{
    render() {
      return (
          <SafeAreaView style={styles.MainContainer}>
            <PlayersThree />
          </SafeAreaView>
        );
      }
    }  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

 ChoiceContainer: {
    paddingLeft: "10%",
    paddingRight: "10%",
    justifyContent: 'center',

  },

  MainContainer :{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
   margin: 10

   },

   imageStyle:{
    width: 200,
    height: 300,
    resizeMode: 'center'

  },

  buttonContainer:{
    color: '#000',
    fontSize: 80,
    flexDirection: "column",
    backgroundColor: "#f194ff",
  },

});
