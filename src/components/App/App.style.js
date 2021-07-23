import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;
