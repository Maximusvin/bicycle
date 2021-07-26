export const getAllBicycles = store => store.bicycles.entities;
export const getAmountBicycles = store => getAllBicycles(store).length;
export const getAmountAvailableBike = store =>
  getAllBicycles(store).reduce(
    (total, bike) => (bike.status === 'available' ? total + 1 : total),
    0,
  );
export const getAmountBookedBike = store =>
  getAllBicycles(store).reduce(
    (total, bike) => (bike.status === 'busy' ? total + 1 : total),
    0,
  );

export const getAverageBikeCost = store =>
  getAllBicycles(store).reduce((total, bike) => total + Number(bike.price), 0) /
  getAmountBicycles(store);
