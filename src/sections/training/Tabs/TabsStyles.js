import styled from 'styled-components';

export const Container = styled.div`
  background: #1b1b1b;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 2fr 1fr 1fr 1fr);
  grid-gap: 0px;
  margin-bottom: 20em;

  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 2fr 1fr 1fr 1fr);
  }
`;

export const ActiveCard = styled.div`
  background: #353535;
  padding: 0em 1.5em;
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  border-bottom: 5px solid #353535;
  position: relative;

  &::after {
    content: '';
    width: 78%;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    background: #000;
    left: 0;
    bottom: -5px;
  }

  @media only screen and (max-width: 546px) {
    padding: 0;
  }
`;

export const TextContainer = styled.div`
  margin: 3em;
`;

export const Card = styled.div`
  margin: 0;
  border-bottom: 5px solid rgba(196, 196, 196, 0.4);
`;

export const H4 = styled.h4`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 18;
  color: #f5f0f0;
  margin: 0.25em auto;
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12;
  color: #f5f0f0;
  margin: 1.5em auto 0 0;
  max-width: 400px;
`;
