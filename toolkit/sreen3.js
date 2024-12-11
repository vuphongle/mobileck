// screen/screen3.js
import React, { useState } from 'react';
import { TextInput, Button, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setProducts } from '../slices/productSlice';  // Import action

export default function Screen3({ route, navigation }) {
  const { product } = route.params;
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const dispatch = useDispatch();

  const handleInputChange = (name, value) => {
    setEditedProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    // Call API to save changes and dispatch action to update state
    axios.put(`https://6707f41d8e86a8d9e42d968b.mockapi.io/product/${editedProduct.id}`, editedProduct)
      .then(response => {
        dispatch(setProducts(response.data));  // Cập nhật lại dữ liệu trong Redux state
        navigation.goBack();
      })
      .catch(error => console.error('Error updating product:', error));
  };

  return (
    <SafeAreaView>
      <TextInput value={editedProduct.name} onChangeText={(text) => handleInputChange('name', text)} />
      <TextInput value={editedProduct.image} onChangeText={(text) => handleInputChange('image', text)} />
      <TextInput value={editedProduct.price} onChangeText={(text) => handleInputChange('price', text)} />
      <TextInput value={editedProduct.detail} onChangeText={(text) => handleInputChange('detail', text)} />
      <Button title="Save Changes" onPress={handleSave} />
    </SafeAreaView>
  );
}
