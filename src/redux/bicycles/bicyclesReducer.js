import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBicycles } from './bicyclesOperations';
import { changeStatusBicycle, deleteBicycle } from './bicyclesActions';

const entities = createReducer([], {
  [fetchBicycles.fulfilled]: (_, { payload }) => payload,
  [changeStatusBicycle]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id ? { ...item, status: payload.status } : item,
    ),
  [deleteBicycle]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});

const loading = createReducer(false, {
  [fetchBicycles.pending]: () => true,
  [fetchBicycles.fulfilled]: () => false,
  [fetchBicycles.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBicycles.rejected]: (_, { payload }) => payload,
  [fetchBicycles.pending]: () => null,
});

export default combineReducers({
  entities,
  loading,
  error,
});
