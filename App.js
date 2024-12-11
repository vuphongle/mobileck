import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Screen1 from './screen/screen1'
import Screen2 from './screen/screen2'
import Screen3 from './screen/screen3'




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Screen2">
        <Stack.Screen name = "Screen1" component = {Screen1} options = {{headerShown: false}}/>
        <Stack.Screen name = "Screen2" component = {Screen2} options = {{headerShown: false}}/>
        <Stack.Screen name = "Screen3" component = {Screen3} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
