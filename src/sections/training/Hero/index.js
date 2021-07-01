import styled from 'styled-components';
import HeroImg from '../../../assets/images/hero-image.jpg';

const HeroContainer = styled.div`
  margin: 5em auto;
  background: url(${HeroImg});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 847px;

  &::before {
    content: '';
    position: absolute;
    inset: 13.5em 0;
    width: 100vw;
    height: 847px;
    background-image: linear-gradient(
      rgba(27, 27, 27, 0.45),
      rgba(27, 27, 27, 0.3)
    );
    /* background: blue; */
  }

  @media only screen and (max-width: 1260px) {
    &::before {
      height: 868px;
    }
  }

  @media only screen and (max-width: 638px) {
    &::before {
      inset: 12.5em 0;
      max-height: 847px;
    }
  }

  @media only screen and (max-width: 432px) {
    height: calc(210vw - 200px);

    &::before {
      height: calc(210vw - 200px);
    }
  }
`;

const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-size: 96px;
  font-weight: 600;
  color: #f5f0f0;
  max-width: 470px;
  position: absolute;
  line-height: 88px;
  letter-spacing: -5.76px;
  inset: 4.35em 0.6em;

  @media only screen and (max-width: 1260px) {
    inset: 4.6em 0.6em;
  }

  @media only screen and (max-width: 638px) {
    width: 88%;
    text-align: center;
    margin: auto;
    inset: 0;
    top: 5em;
  }

  @media only screen and (max-width: 510px) {
    font-size: clamp(42px, 17vw, 80px);
    top: 6em;
    line-height: normal;
    word-spacing: 5px;
  }

  @media only screen and (max-width: 510px) {
    letter-spacing: -3px;
  }

  @media only screen and (max-width: 224px) {
    top: 8em;
    font-size: 32px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <H1>PERSONAL TRAINING AT FIT</H1>
    </HeroContainer>
  );
};

export default Hero;
