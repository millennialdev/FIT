import { HeroContainer as HC } from '../Hero/HeroStlyes';
import { ContentContainer } from '../../../components';
import styled from 'styled-components';
import HeroImg from '../../../assets/images/trainer-hero.jpg';

export const HeroContainer = styled.div`
  margin: 7em auto;
  background: url(${HeroImg});
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 810px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 810px;
    background-image: linear-gradient(
      rgba(27, 27, 27, 0.4),
      rgba(27, 27, 27, 0)
    );
  }

  @media only screen and (max-width: 832px) {
    margin: 0px auto;
  }
`;

export const TextContainer = styled(ContentContainer)`
  transform: translateY(7em);

  @media only screen and (max-width: 832px) {
  }
`;

export const H3 = styled.h3`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: auto;
  color: #f5f0f0;
  text-transform: uppercase;
  max-width: 195px;
  margin: 2em 0;
`;
