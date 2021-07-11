import styled from 'styled-components';

export const Container = styled.div`
  margin: 10em 0 7em 0;
  max-width: 800px;

  @media only screen and (max-width: 500px) {
    margin: 5em 0 2.5em 0;
  }
`;

export const H2 = styled.h2`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: -1.26px;
  color: #f5f0f0;
  text-transform: uppercase;
  margin: 0;
`;

export const H3 = styled.h3`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 42px;
  letter-spacing: 0.84px;
  color: #f5f0f0;
  margin: 0.25em auto 0.75em auto;
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #f5f0f0;
`;
