// screen/screen2.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productSlice'; // import action
import { FlatList, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';

export default function Screen2({ navigation }) {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);  // Truy cập state

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());  // Gọi action để lấy sản phẩm từ API
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Screen3', { product: item })}>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ height: 100, width: 125 }} />
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
