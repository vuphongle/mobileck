  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';

  export default function Screen3({ route, navigation }) {
    const { product } = route.params;

    // State to hold the edited product details
    const [editedProduct, setEditedProduct] = useState({
      ...product,  // Copy initial product data to state
    });

    // Handler for input changes
    const handleInputChange = (name, value) => {
      setEditedProduct(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    // Handler for saving the updated product
    const handleSave = () => {
      // Call API to update the product 
      axios.put(`https://6707f41d8e86a8d9e42d968b.mockapi.io/product/${editedProduct.id}`, editedProduct)
        .then(response => {
          console.log("Product updated successfully!", response.data);
          navigation.goBack(); // Go back to Screen2 after saving
        })
        .catch(error => {
          console.error("Error updating product:", error);
        });
    };

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={editedProduct.name}
            onChangeText={(text) => handleInputChange('name', text)} // Handle name input change
          />

          <Text>Image URL:</Text>
          <TextInput
            style={styles.input}
            value={editedProduct.image}
            onChangeText={(text) => handleInputChange('image', text)} // Handle image URL input change
          />

          <Text>Price:</Text>
          <TextInput
            style={styles.input}
            value={editedProduct.price}
            onChangeText={(text) => handleInputChange('price', text)} // Handle price input change
          />

          <Text>Details:</Text>
          <TextInput
            style={styles.input}
            value={editedProduct.detail}
            onChangeText={(text) => handleInputChange('detail', text)} // Handle detail input change
          />

          <Button
            title="Save Changes"
            onPress={handleSave} // Save the updated product
          />

          <Button
            title="Back to Screen 2"
            onPress={() => navigation.goBack()} // Navigate back to Screen 2
          />
        </View>
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    input: {
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 8,
      padding: 8,
    },
  });
