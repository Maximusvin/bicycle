import { createAction } from '@reduxjs/toolkit';

export const changeStatusBicycle = createAction(
  'bicycle/changeStatusBicycle',
  (id, status) => ({ payload: { id, status } }),
);

export const deleteBicycle = createAction('bicycle/deleteBicycle', id => ({
  payload: { id },
}));

export const addBicycle = createAction('bicycle/addBicycle');
