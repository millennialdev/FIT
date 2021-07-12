import styled from 'styled-components';
import { StyledLink as LinkS } from '../../index/blogPreview/BlogPreviewStyles';

export const StyledLink = styled(LinkS)`
  &::after {
    transform: translate(-15px, 8px);
  }

  &:hover {
    &::after {
      width: 130px;
    }
  }
`;

export const Container = styled.div`
  margin: 10em auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1220px) {
    flex-direction: column;
    margin-top: 7.5em;
  }

  @media only screen and (max-width: 1220px) {
    margin-top: 5em;
  }
`;

export const TextContainer = styled.div`
  max-width: 500px;

  @media only screen and (max-width: 1220px) {
    margin-bottom: 3.5em;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr 1fr);
  grid-gap: 50px;

  @media only screen and (max-width: 2528px) {
    grid-template-columns: repeat(1, 1fr 1fr);
  }

  @media only screen and (max-width: 1880px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  border: 1.5px solid #f5f0f0;
  max-width: 475px;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 30em;
  margin-bottom: 1.5em;

  @media only screen and (max-width: 600px) {
    height: 60vw;
  }
`;

export const CardTextContainer = styled.div`
  margin: 0 0 0 1em;
  padding: 1.25em;
`;

export const CardP = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #f5f0f0;
  margin: 0 0 0.5em 0;
  font-size: 24px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Ideas = styled(CardP)`
  text-transform: uppercase;
`;
