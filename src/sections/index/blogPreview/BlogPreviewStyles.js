import styled from 'styled-components';
import Chad from '../../../assets/images/chad.jpg';
import ChadMobile from '../../../assets/images/chad-mobile.jpg';

export const BlogContainer = styled.div`
  width: 62%;
  padding-top: 4em;
  margin: 0 auto;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(1, 1fr 1.6fr);

  @media only screen and (max-width: 2100px) {
    width: 75.5%;
  }

  @media only screen and (max-width: 1600px) {
    width: 82%;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

export const Subtitle = styled.small`
  font-family: 'Aileron', sans-serif;
  font-size: 36px;
  letter-spacing: -3.5%;
  max-width: 280px;
  font-weight: 400;
  margin: 0 auto;
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 385px;
  line-height: 122.9%;

  @media only screen and (max-width: 850px) {
    margin: 1.5em auto;
  }
`;

export const Img = styled.div`
  background-image: url(${Chad});
  border-radius: 5px;
  background-repeat: no-repeat;
  -ms-background-position-x: center;
  -ms-background-position-y: top;
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: auto;

  @media only screen and (max-width: 1280px) and (min-width: 850px) {
    background-image: url(${ChadMobile});
  }

  @media only screen and (max-width: 850px) {
    width: 83vw;
    height: 500px;
    text-align: center;
  }

  @media only screen and (max-width: 684px) {
    background-image: url(${ChadMobile});
  }
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: color 500ms ease;
  white-space: nowrap;
  width: 160px;

  &::after {
    content: '';
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: #8f6453;
    transform: translateY(8px);
    transition: all 200ms linear;
  }

  &:hover {
    color: white;
    font-weight: 600;

    &::after {
      width: 160px;
    }
  }

  @media screen and (max-width: 850px) {
    margin: 0 auto;
  }
`;

export const H2 = styled.h2`
  color: #f5f0f0;
  font-family: 'Aileron', sans-serif;
  font-size: 42px;
  font-weight: 600;
  margin: 0 auto 0.5em auto;
  letter-spacing: 2%;

  @media screen and (max-width: 850px) {
    text-align: center;
    margin-bottom: 0.45em;
  }
`;
