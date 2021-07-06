import styled from 'styled-components';
import { H2 as Title } from '../Personal/PersonalStyles';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(1, 1fr 0.65fr);
  grid-gap: 15%;

  @media only screen and (max-width: 1764px) {
    grid-template-columns: repeat(1, 1fr 1fr);
    grid-gap: 30px;
  }

  @media only screen and (max-width: 1068px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
`;

export const TiersContainer = styled.div`
  width: 100%;
`;

export const TierContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5em;
  text-align: right;

  @media only screen and (max-width: 532px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const H2 = styled(Title)`
  max-width: 462px;
  letter-spacing: -0.096px;
  color: #f5f0f0;
`;

export const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #f5f0f0;
  max-width: 462px;
`;

export const TierP = styled.h3`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #f5f0f0;
  max-width: 462px;
  margin-left: 2.3em;
`;

export const TextContainer = styled.div`
  max-width: 345px;
  margin-top: 0.75em;
  text-align: left;

  @media only screen and (max-width: 532px) {
    margin: 0.75em auto 2.5em auto;
  }
`;

export const UL = styled.ul`
  margin-top: 0.5em;

  @media only screen and (max-width: 1068px) {
    padding-left: 1.25em;
  }
`;

export const LI = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #f5f0f0;
  margin-bottom: 0.75em;
`;

export const GraphicContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HoursNumber = styled.h4`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: -2.88px;
  margin: 0.55em 0 0 0;
`;

export const Hours = styled.p`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.63px;
  margin: 0.25em 0 0 0;
`;

export const CircularProgress = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
`;

export const CircularProgressCircle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: transparent;
  border-radius: 50%;
  overflow: hidden;
`;

export const Segment = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vw;
  background: blue;
  transform-origin: 0 0;
`;

export const CircularProgressInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 180px;
  height: 180px;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;
  border-radius: 50%;
  box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 2px;
`;

export const CircularProgressValue = styled.div`
  position: absolute;
  font-size: 400%;
  font-family: Roboto;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
