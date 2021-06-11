import styled from 'styled-components';
import { IoIosPlayCircle as PlayIcon } from 'react-icons/io';

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

export const ImageContainer = styled.div``;

export const Img = styled.img`
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: transform 500ms ease-in;
  transition: border 500ms ease-in-out;

  &:hover {
    border: 3.5px solid hsl(17deg, 27%, 34%);
  }
`;

export const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  color: #f5f0f0;
  transition: color 500ms ease;
  transition: box-shadow 750ms ease;

  &:hover {
    color: #fff;
    box-shadow: 0 12px 12px 0 rgba(245, 240, 240, 0.03);
  }

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

export const PlayCircle = styled(PlayIcon)`
  position: relative;
  top: 29em;
  left: 90%;
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
  color: ${({ isLight }) => (isLight ? '#f5f0f0' : '#1b1b1b')};
  cursor: pointer;
  border-radius: 50%;
  z-index: 3;
  transition: background 500ms ease;
  transition: color 300ms ease-in;
  transition: border 650ms ease-in-out;
  transition: transform 750ms linear;

  &:hover {
    background: #1b1b1b;
    color: #f5f0f0;
    border: 3.5px solid #8f6453;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 3600px) {
    top: 26em;
  }

  @media only screen and (max-width: 3230px) {
    top: 23.5em;
  }

  @media only screen and (max-width: 2945px) {
    top: 21em;
  }

  @media only screen and (max-width: 2645px) {
    top: 18em;
  }

  @media only screen and (max-width: 2288px) {
    top: 16em;
  }

  @media only screen and (max-width: 2100px) {
    top: 19em;
  }

  @media only screen and (max-width: 1995px) {
    top: 17em;
  }

  @media only screen and (max-width: 1790px) {
    top: 15.5em;
  }

  @media only screen and (max-width: 1520px) {
    top: 14em;
  }

  @media only screen and (max-width: 1396px) {
    top: 13em;
  }

  @media only screen and (max-width: 1320px) {
    top: 19em;
  }

  @media only screen and (max-width: 1224px) {
    top: 17em;
  }

  @media only screen and (max-width: 1084px) {
    top: 15.5em;
  }

  @media only screen and (max-width: 992px) {
    top: 14em;
  }

  @media only screen and (max-width: 888px) {
    top: 13em;
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
