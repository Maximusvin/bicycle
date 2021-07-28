import { createAction } from '@reduxjs/toolkit';

export const changeStatusBicycle = createAction(
  'bicycle/changeStatusBicycle',
  (id, status) => ({ payload: { id, status } }),
);
