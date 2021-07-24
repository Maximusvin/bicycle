import { useEffect } from 'react';
import { Main } from 'components';
import { fetchBicycles } from 'services/bicycles-api';

export const MainView = () => {
  useEffect(() => {
    fetchBicycles().then(res => console.log(res));
  }, []);
  return <Main />;
};
