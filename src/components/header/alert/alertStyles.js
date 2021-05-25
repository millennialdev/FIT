import styled from 'styled-components';

export const Container = styled.div`
  background: #b3c2ab;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1b1b1b;
  height: 40px;
  width: 100%;
  font-size: clamp(1rem, 1.9vw, 1.2rem);
  padding: 25px;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media only screen and (max-width: 460px) {
    font-size: clamp(0.7rem, 3.5vw, 0.9rem);
    padding: 25px 1px 25px 1px;
  }
`;
