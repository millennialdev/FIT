import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 0.33fr 1fr);
  grid-gap: 60vw;
  margin: 5em 0;

  @media only screen and (max-width: 2132px) {
    grid-gap: 40vw;
  }

  @media only screen and (max-width: 1276px) {
    grid-gap: 30vw;
  }

  @media only screen and (max-width: 1100px) {
    grid-gap: 20vw;
  }

  @media only screen and (max-width: 892px) {
    grid-gap: 10vw;
  }

  @media only screen and (max-width: 685px) {
    grid-gap: 35px;
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 432px) {
    grid-gap: 20px;
  }
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

  @media only screen and (max-width: 685px) {
    font-size: 48px;
    transform: translateY(-11px);
  }

  @media only screen and (max-width: 510px) {
    font-size: clamp(24px, 11vw, 48px);
    line-height: 48px;
    word-break: break-word;
  }

  @media only screen and (max-width: 350px) {
    line-height: 38px;
  }

  @media only screen and (max-width: 215px) {
    line-height: 28px;
  }
`;

export const PContainer = styled.div`
  margin: 0;
  max-width: 710px;
`;

export const P = styled.p`
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #f5f0f0;
`;
