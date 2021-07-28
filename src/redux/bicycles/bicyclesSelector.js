import { createSelector } from 'reselect';

export const getAllBicycles = store => store.bicycles.entities;

export const getAmountBicycles = store => getAllBicycles(store).length;

export const getAmountAvailableBike = store =>
  getAllBicycles(store).reduce(
    (total, bike) => (bike.status === 'available' ? total + 1 : total),
    0,
  );

export const getAmountBookedBike = createSelector(
  [getAllBicycles],
  bicycles => {
    return bicycles.reduce(
      (total, bike) => (bike.status === 'busy' ? total + 1 : total),
      0,
    );
  },
);

export const getAverageBikeCost = createSelector(
  [getAllBicycles, getAmountBicycles],
  (bicycle, amountBicycles) => {
    return (
      bicycle.reduce((total, bike) => total + Number(bike.price), 0) /
      amountBicycles
    );
  },
);

// export const isValidId = (store, id) => {
//   return getAllBicycles(store).some(item => item.id === id);
// };
