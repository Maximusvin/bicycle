import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from 'components';
import { fetchBicycles } from 'redux/bicycles/bicyclesOperations';

export const MainView = () => {
  const isLoading = useSelector(state => state.bicycles.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBicycles());
  }, [dispatch]);

  return <Main isLoading={isLoading} />;
};
