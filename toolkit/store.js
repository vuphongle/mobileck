// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';  // Tạo một slice để quản lý sản phẩm

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
