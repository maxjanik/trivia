import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, ScrollView, Component, TouchableOpacity} from 'react-native';
import PlayersData from '../components/data.json';

var pickone = PlayersData[0]

class Players extends React.Component{
  render() {
    return(
      <View>
        {PlayersData.map((playerCards, index) => {
          return <Text>{playerCards.firstname}</Text>
      })}
      <Text>{pickone.firstname}</Text>
      </View>

    )
  }
};


export default Players
