import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { closeModal } from 'store/modalDelivery/modalDeliverySlice';
import { clearOrder } from 'store/order/orderSlice';

const initialState = {
  status: 'loading',
  name: '',
  phone: '',
  format: 'delivery',
  address: '',
  floor: '',
  intercom: '',
  response: null,
  error: '',
};

export const formSubmit = createAsyncThunk('form/submit', async (data, { dispatch, rejectWithValue }) => {
  try {
    const response = await fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }
    dispatch(clearOrder());
    dispatch(closeModal());
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(formSubmit.pending, state => {
        state.status = 'loading';
        state.response = null;
        state.error = '';
      })
      .addCase(formSubmit.fulfilled, (state, action) => {
        state.status = 'success';
        state.response = action.payload;
        state.error = '';
      })
      .addCase(formSubmit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.response = null;
      });
  },
});

export const { updateFormValue } = formSlice.actions;
export default formSlice.reducer;
