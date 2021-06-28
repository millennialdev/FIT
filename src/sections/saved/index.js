import styled from 'styled-components';
export const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-size: 42px;
  font-weight: 600;
  border-bottom: 2px solid #8f6453;
  margin-top: calc(77px - 13px);
  padding-bottom: 39px;
`;

export const A = styled.a`
  transition: color 0.75s ease-in-out;
  transition: border-bottom 0.55s ease;

  &:hover {
    color: hsl(18, 27%, 63%);
  }
`;

export const LocationAndMapContainer = styled.div`
  margin-bottom: 28em;

  @media only screen and (max-width: 1452px) {
    margin-bottom: 0em;
  }
`;
