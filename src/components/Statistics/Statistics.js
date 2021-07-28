import { useSelector } from 'react-redux';
import { formatCurrency } from 'Functions';
import {
  getAmountBicycles,
  getAverageBikeCost,
  getAmountAvailableBike,
  getAmountBookedBike,
} from 'redux/bicycles/bicyclesSelector';
import { Wrapper, Title, Line, Span } from './Statistics.style';

const Statistics = () => {
  const totalBikes = useSelector(getAmountBicycles);
  const averageBikeCost = useSelector(getAverageBikeCost);
  const amountAvailable = useSelector(getAmountAvailableBike);
  const amountBooked = useSelector(getAmountBookedBike);

  return (
    <Wrapper>
      <Title>Statistics</Title>

      <Line>
        Total Bikes: <Span>{totalBikes ? totalBikes : '-'}</Span>
      </Line>
      <Line>
        Available Bikes: <Span>{amountAvailable ? amountAvailable : '-'}</Span>
      </Line>
      <Line>
        Booked Bikes: <Span>{amountBooked ? amountBooked : '-'}</Span>
      </Line>
      <Line>
        Average bike cost:
        <Span>
          {averageBikeCost ? formatCurrency(averageBikeCost) : '-'} UAH/hr.
        </Span>
      </Line>
    </Wrapper>
  );
};

export default Statistics;
