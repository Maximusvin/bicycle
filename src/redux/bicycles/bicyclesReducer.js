import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBicycles } from './bicyclesOperations';

console.log(fetchBicycles);

const entities = createReducer([], {
  [fetchBicycles.fulfilled]: (_, { payload }) => payload,
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
