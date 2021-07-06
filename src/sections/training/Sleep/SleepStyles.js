import styled from 'styled-components';
import { LeftContainer as L } from '../Results/ResultStyles';
import { P as Para } from '../T-X-Hero/TXStyles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5em 0;
  max-width: 99%;

  @media only screen and (max-width: 1125px) {
    flex-direction: column;
  }
`;

export const P = styled(Para)`
  max-width: none;
  margin: 1em 0;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  max-width: 530px;

  @media only screen and (max-width: 1125px) {
    margin: 0 auto 5em auto;
  }

  @media only screen and (max-width: 636px) {
    margin: 0 auto 2.5em auto;
  }
`;

export const Img = styled.img`
  width: calc(1.5 * 528px);
  height: calc(1.5 * 777px);

  @media only screen and (max-width: 2200px) {
    width: calc(1.25 * 528px);
    height: calc(1.25 * 777px);
  }

  @media only screen and (max-width: 1500px) {
    width: calc(1 * 528px);
    height: calc(1 * 777px);
  }

  @media only screen and (max-width: 1280px) {
    width: calc(0.75 * 528px);
    height: calc(0.75 * 777px);
  }

  @media only screen and (max-width: 1125px) {
    width: calc(1 * 528px);
    height: calc(1 * 777px);
    margin: 0 auto;
  }

  @media only screen and (max-width: 636px) {
    width: 100%;
    height: 100%;
  }
`;
