import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5em 0;
  max-width: 99%;
  /* @media only screen and (max-width: 2132px) {
  } */
`;

export const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 0.2fr 1fr);
  grid-gap: 40px;
  max-width: 540px;
  margin-right: 2.5em;
`;

export const H2 = styled.h2`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 58px;
  margin: 0;
  color: #f5f0f0;
  letter-spacing: calc(-6% * 96px);
  text-transform: uppercase;
  line-height: 60px;
  transform: translateY(-7px);
  max-width: 494px;
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 527px;
  height: 703px;
`;
