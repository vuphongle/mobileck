// slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thực hiện gọi API để lấy sản phẩm
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('https://6707f41d8e86a8d9e42d968b.mockapi.io/product');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: 'idle',  // 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
