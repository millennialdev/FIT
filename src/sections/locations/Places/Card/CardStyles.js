import styled from 'styled-components';
import { HiHeart } from 'react-icons/hi';

export const CardsContainer = styled.div`
  @media only screen and (max-width: 810px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
  }
`;

export const CardContainer = styled.div`
  width: 710px;
  height: 200px;
  margin: 2em 0;
  border: 1px solid #f5f0f0;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr);
  grid-gap: 0px;
  cursor: pointer;

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    height: 500px;
    margin: 0;
  }

  @media only screen and (max-width: 520px) {
    height: 540px;
  }

  @media only screen and (max-width: 428px) {
    height: 480px;
  }

  @media only screen and (max-width: 400px) {
    height: 500px;
  }

  /* @media only screen and (max-width: 260px) {
    max-width: 80%;
  } */
`;

export const Image = styled.img`
  height: 99.64844%;
  width: 100%;
  margin: auto 0;
  overflow: hidden;
  border: 0;
  border-radius: 5px 0 0 5px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  margin: 1em;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 0.5em 0;
`;

export const Heart = styled(HiHeart)`
  width: 30px;
  height: 30px;
  fill: ${({ isHeart }) => (isHeart ? '#a491ba' : 'none')};
  stroke: ${({ isHeart }) => (isHeart ? 'none' : '#f5f0f0')};
  stroke-width: ${({ isHeart }) => (isHeart ? '0px' : '1px')};
  margin-bottom: 0.2em;
`;

export const H2 = styled.h2`
  font-family: 'Aileron', sans;
  font-size: 30px;
  font-weight: 600;
  max-width: 76%;
  margin: 0;

  @media only screen and (max-width: 810px) {
    line-height: 32px;
  }

  @media only screen and (max-width: 568px) and (min-width: 520px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 260px) {
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
  }
`;

export const Location = styled.h4`
  font-family: 'Montserrat', sans;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export const P = styled.p`
  font-family: 'Montserrat', sans;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  position: absolute;
  bottom: 0.25em;
  right: 0;
`;
