import styled from 'styled-components';
import BlogImage from '../../../assets/images/blog-preview.jpg';
import BlogImageMobile from '../../../assets/images/blog-preview-mobile.jpg';
import BlogImageSuperMobile from '../../../assets/images/blog-preview-super-mobile.jpg';

export const HeroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr 250px);
  margin-top: 3em;
  position: relative;

  @media only screen and (max-width: 1528px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.div`
  background-image: url(${BlogImage});
  border-radius: 5px;
  background-repeat: no-repeat;
  -ms-background-position-x: left;
  -ms-background-position-y: top;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 1200px;
  margin: auto;

  @media only screen and (max-width: 1528px) {
    background-position: center left;
  }

  @media only screen and (max-width: 1064px) {
    background-position: center center;
    background-image: url(${BlogImageMobile});
  }

  @media only screen and (max-width: 550px) {
    background-position: top center;
    height: 800px;
    background-image: url(${BlogImageSuperMobile});
  }
`;

export const TextContainer = styled.div`
  padding: 1em 1.75em;
  background: #f5f0f0;
  color: #1b1b1b;
  margin: auto 0;
  border-radius: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 125px;
  transform: scale(1.5);
  max-height: 204px;
  min-width: 498px;

  @media only screen and (max-width: 1528px) {
    transform: scale(1.25);
    top: auto;
    bottom: 45px;
    right: 85px;
  }

  @media only screen and (max-width: 788px) {
    transform: scale(1);
    inset: auto auto 45px auto;
  }

  @media only screen and (max-width: 592px) {
    min-width: 88%;
    max-height: 100%;
  }

  @media only screen and (max-width: 396px) {
    min-width: 100%;
    padding: 1em;
  }
`;

export const P = styled.p`
  margin: 0.25em auto;
`;

export const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -1.08px;
  margin: 0.5em auto 0 auto;
`;

export const PMod = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.6px;
  margin: 0.35em auto;
`;
