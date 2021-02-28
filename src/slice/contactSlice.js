import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { status } from '../utils/helpers';
import { CONTACT_ENDPOINT } from '../utils/endpoint'

const initialState_Actions = {
  info: '',
  status: status.idle,
};

export const sendMail = createAsyncThunk(
  'contact/sendMail',
  async (payload) => {
    const sendMail_response = await axios.post(CONTACT_ENDPOINT, payload);
    return sendMail_response.data;
  },
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState_Actions,
  reducers: {},
  extraReducers: {
    [sendMail.pending]: (state, { payload }) => {
      state.status = status.pending;
    },
    [sendMail.fulfilled]: (state, { payload }) => {
      state.status = status.success;
      state.info = payload
    },
    [sendMail.rejected]: (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    }
  }
});

export default contactSlice;