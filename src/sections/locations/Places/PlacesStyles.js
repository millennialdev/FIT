import styled from 'styled-components';

export const P = styled.p`
  display: inline-block;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-bottom: 0;
`;

export const LocationAndMapContainer = styled.div`
  margin-bottom: 16em;

  @media only screen and (max-width: 1752px) {
    margin-bottom: 10em;
  }

  @media only screen and (max-width: 1452px) {
    margin-bottom: 0px;
  }
`;

export const CardsContainer = styled.div`
  @media only screen and (max-width: 810px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
  }
`;
