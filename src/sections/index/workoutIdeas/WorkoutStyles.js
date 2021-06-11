import styled from 'styled-components';

export const WorkoutContainer = styled.div`
  width: 62%;
  max-width: 2330px;
  margin: 7em auto;

  @media only screen and (max-width: 2100px) {
    width: 75%;
  }

  @media only screen and (max-width: 1600px) {
    width: 80%;
  }

  @media only screen and (max-width: 685px) {
    margin-bottom: 1em;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-gap: calc(1 * 60px);
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

  @media only screen and (max-width: 1320px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: calc(0.85 * 60px);
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: calc(0.5 * 60px);
  }
`;

export const Card = styled.div``;

export const Img = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-size: 28px;
  font-weight: 400;
  /* white-space: pre-line; */

  @media only screen and (max-width: 1820px) {
    font-size: clamp(21px, 1.5vw, 28px);
  }

  @media only screen and (max-width: 850px) {
    font-size: 18px;
    text-align: center;
    width: 80%;
    margin: 0.65em auto 1em auto;
  }

  @media only screen and (max-width: 418px) {
    width: 95%;
  }
`;

export const By = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -6.5%;

  @media only screen and (max-width: 1820px) {
    font-size: clamp(12px, 1.5vw, 18px);
  }

  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

export const Author = styled.span`
  cursor: pointer;
`;
