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
  errors: {},
  touch: false,
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
    setError: (state, action) => {
      state.errors = action.payload;
    },
    clearError: state => {
      state.errors = {};
    },
    changeTouch: state => {
      state.touch = true;
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

export const { updateFormValue, setError, clearError, changeTouch } = formSlice.actions;
export default formSlice.reducer;

export const validateForm = () => (dispatch, getState) => {
  const form = getState().form;
  console.log('form: ', form);
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Поле имя не должно быть пустым';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Поле телефон не должно быть пустым';
  }

  if (!form.address.trim() && form.format === 'delivery') {
    errors.address = 'Поле адрес не должно быть пустым';
  }

  if (!form.floor.trim() && form.format === 'delivery') {
    errors.floor = 'Поле этаж не должно быть пустым';
  }

  if (!form.intercom.trim() && form.format === 'delivery') {
    errors.intercom = 'Поле домофон не должно быть пустым';
  }

  if (form.format === 'pickup') {
    dispatch(updateFormValue({ field: 'address', value: '' }));
    dispatch(updateFormValue({ field: 'floor', value: '' }));
    dispatch(updateFormValue({ field: 'intercom', value: '' }));
  }

  if (Object.keys(errors).length) {
    dispatch(setError(errors));
  } else {
    dispatch(clearError());
  }
};
