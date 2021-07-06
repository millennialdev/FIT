import styled from 'styled-components';
import { H2 as Title } from '../Personal/PersonalStyles';
import HeroImg from '../../../assets/images/TX-Hero.jpg';
import { StyledLink as SL } from '../../index/blogPreview/BlogPreviewStyles';

export const StyledLink = styled(SL)`
  font-size: 14px;
  font-weight: 700;
`;

export const HeroContainer = styled.div`
  margin: 1.5em auto 0 auto;
  position: relative;
  background: url(${HeroImg});
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: bottom center;
  width: 100vw;
  max-height: 1848px;
  height: 56vw;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(27, 27, 27, 0.8),
      rgba(27, 27, 27, 0.1)
    );
  }

  @media only screen and (max-width: 1320px) {
    height: 70vw;
    backgound-position: center center;
  }

  @media only screen and (max-width: 840px) {
    height: 100vw;
    backgound-position: bottom right;
  }

  @media only screen and (max-width: 522px) {
    height: 140vw;
  }

  @media only screen and (max-width: 354px) {
    height: 200vw;

    &::before {
      background-image: linear-gradient(
        rgba(27, 27, 27, 0.9),
        rgba(27, 27, 27, 0.3)
      );
    }
  }
`;

export const TextContainer = styled.div`
  padding-top: 9%;
  max-width: 620px;
  position: relative;
`;

export const H2 = styled(Title)`
  letter-spacing: -0.058px;
  transform: translateY(0px);
`;

export const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #f5f0f0;
  max-width: 456px;

  @media only screen and (max-width: 286px) {
    font-size: 16px;
  }
`;
