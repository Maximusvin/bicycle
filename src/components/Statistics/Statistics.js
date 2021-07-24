import { Wrapper, Title, Line, Span } from './Statistics.style';

const Statistics = () => {
  return (
    <Wrapper>
      <Title>Statistics</Title>
      <Line>
        Total Bikes: <Span>0</Span>
      </Line>
      <Line>
        Available Bikes: <Span>0</Span>
      </Line>
      <Line>
        Booked Bikes: <Span>0</Span>
      </Line>
      <Line>
        Average bike cost: <Span>0.00 UAH/hr.</Span>
      </Line>
    </Wrapper>
  );
};

export default Statistics;
