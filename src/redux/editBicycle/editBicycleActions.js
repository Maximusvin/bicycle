import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bicyclesAPI from 'services/bicycles-api';

export const fetchBicycles = createAsyncThunk(
  'bicycles/fetchBicyclesAPI',
  async (_, { rejectWithValue }) => {
    try {
      return await bicyclesAPI.fetchBicycles();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
