import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5em 0;
  max-width: 99%;

  @media only screen and (max-width: 832px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 0.2fr 1fr);
  grid-gap: 40px;
  max-width: 540px;
  margin-right: 3.5em;

  @media only screen and (max-width: 832px) {
    margin: 5em auto 1em auto;
  }

  @media only screen and (max-width: 432px) {
    grid-gap: 20px;
  }

  @media only screen and (max-width: 400px) {
    grid-gap: 0px;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  width: calc(1 * 527px);
  height: calc(1 * 703px);

  @media only screen and (max-width: 1144px) {
    width: calc(0.85 * 527px);
    height: calc(0.85 * 703px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(0.7 * 527px);
    height: calc(0.7 * 703px);
  }

  @media only screen and (max-width: 864px) {
    width: calc(0.65 * 527px);
    height: calc(0.65 * 703px);
  }

  @media only screen and (max-width: 832px) {
    width: calc(1 * 527px);
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
`;
