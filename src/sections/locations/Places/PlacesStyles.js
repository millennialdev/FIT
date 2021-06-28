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
