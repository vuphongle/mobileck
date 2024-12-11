import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const category = [
  {
    "id": "1",
    "title": "All"
  },
  {
    "id": "2",
    "title": "ROADBIKE"
  },
  {
    "id": "3",
    "title": "MOUNTAIN1"
  },
  {
    "id": "4",
    "title": "MOUNTAIN2"
  },
  {
    "id": "5",
    "title": "MOUNTAIN3"
  },
  {
    "id": "6",
    "title": "MOUNTAIN3"
  },
]

const product = [
  {
    "id": "1",
    "name": "Product name 1",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "2",
    "name": "Product name 2",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "3",
    "name": "Product name 3",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "4",
    "name": "Product name 4",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "5",
    "name": "Product name 5",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "6",
    "name": "Product name 6",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
  {
    "id": "7",
    "name": "Product name 7",
    "image": "https://via.placeholder.com/300",
    "price": "200",
    "detail": "................",
  },
]

export default function Screen2({navigation}) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('https://6707f41d8e86a8d9e42d968b.mockapi.io/category')
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    axios.get('https://6707f41d8e86a8d9e42d968b.mockapi.io/product')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/*Search bar*/}
      <View style = {styles.searchContainer}>
        <TouchableOpacity>
          <Icon name = "menu" size = {30}/>
        </TouchableOpacity>

        <View  style = {styles.searchMain}>
          <TextInput 
            placeholder = "Search here ........"
          />

          <TouchableOpacity style = {styles.searchIcon}>
            <Icon name = "search" size = {30}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Icon name = "shopping-cart" size = {30}/>
        </TouchableOpacity>
      </View>

      {/*Category*/}
      <View>
        <FlatList
          data = {categories}
          horizontal={true}
          renderItem = {({item}) => (
            <TouchableOpacity style = {styles.categoryItem}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item)=>item.id}
          showsHorizontalScrollIndicator={false}
          style = {styles.categoryList}
        />
      </View>


      {/*Product*/}
      <View style = {{height: 300}}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productItem}
              onPress={() => navigation.navigate('Screen3', { product: item })}
            >
              <Text>{item.name}</Text>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text>{item.price}</Text>
              <Text>{item.detail}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id + item.title}
          style={styles.productList}
        />
      </View>

      {/*Banner*/}
      <View style = {{height: 100, alignItems: 'center'}}>
        <Image 
          style = {{height: 140, width: "90%", marginTop: 20}}
          source={{ uri: 'https://via.placeholder.com/300'}}

        />
      </View>

      {/*Footer*/}
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Icon name = "home" size = {30}/>
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name = "favorite" size = {30}/>
          <Text>Love</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name = "shopping-cart" size = {30}/>
          <Text>cart</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name = "person" size = {30}/>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 5,
    top: 0,
  },
  searchMain: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryItem:{
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  categoryList: {

  },
  productList: {
    marginTop: 10
  },
  productItem: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: 'white'
  },
  productImage: {
    height: 100,
    width: 125,
  },


  footerContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    width: '100%',
  }


});