import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, ScrollView, Component, TouchableOpacity} from 'react-native';
import PlayersData from '../components/data.json';

var pickone = PlayersData[0];

class PlayersTwo extends React.Component{
  render() {
    return(
      <View>
        <Text>{pickone.firstname}</Text>
      </View>

    )
  }
};


export default PlayersTwo
