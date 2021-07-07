import styled from 'styled-components';
import Img1 from '../../../assets/images/lifestyle-3.jpg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 0.44fr 1fr);
  grid-gap: 5%;
  margin-bottom: 50em;

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @media only screen and (max-width: 850px) {
    display: block;
  }
`;

export const ArticleContainer = styled.div`
  margin: 2em 0;
  height: 100%;

  @media only screen and (max-width: 850px) {
    margin: 2em 0 0 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ImgBck = styled.div`
  background-image: url(${Img1});
  border-radius: 5px;
  background-repeat: no-repeat;
  -ms-background-position-x: center;
  -ms-background-position-y: center;
  background-position: center right;
  background-size: cover;
  height: 1430px;
  width: 100%;
  margin: auto;

  @media only screen and (max-width: 2500px) {
    height: 1200px;
  }

  @media only screen and (max-width: 1600px) {
    height: 800px;
  }

  @media only screen and (max-width: 1600px) {
    height: 600px;
  }

  @media only screen and (max-width: 850px) {
    display: block;
    height: 60vw;
  }
`;

export const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 400;
  text-align: center;
  margin: 0.5em auto 0 auto;
`;
