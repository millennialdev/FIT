import styled from 'styled-components';
import { HiOutlineArrowNarrowRight as rightArrow } from 'react-icons/hi';

export const Arrow = styled(rightArrow)`
  color: #f5f0f0;
  width: 20px;
  height: 20px;
  margin-left: 0.1em;
  transform: translateY(4px);
`;

export const Container = styled.div`
  width: 62.5%;
  padding-top: 1em;
  margin: 0 auto 5em auto;

  @media screen and (max-width: 2100px) {
    width: 75.5%;
  }

  @media screen and (max-width: 1600px) {
    width: 82.5%;
  }

  @media screen and (max-width: 850px) {
    padding-top: 0;
    margin: 7em auto;
  }
`;

export const H2 = styled.h2`
  color: #f5f0f0;
  font-family: 'Aileron', sans-serif;
  font-size: 42px;
  font-weight: 600;
  margin: 0.6em 0;

  @media screen and (max-width: 850px) {
    text-align: center;
  }

  @media only screen and (max-width: 850px) {
    margin-bottom: 1.5em;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1em;
  }
`;

export const SpaceCard = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover .names {
    color: #fff;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 17rem;
  border-radius: 5px;
  object-fit: cover;
  transition: transform 500ms ease-in;
  transition: border 250ms ease-in-out;

  &:hover {
    transform: scale(1.035);
    border: 3px solid hsl(17deg, 27%, 34%);
  }
`;

export const Name = styled.h4`
  text-align: center;
  width: 100%;
  font-size: 26px;
  font-weight: 500;
  margin: 0.25em 0 0 0;
`;

export const StyledLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  left: 92.5%;
  top: -1.25em;
  cursor: pointer;
  text-decoration: none;
  transition: all 450ms ease-in-out;
  white-space: nowrap;

  &:hover {
    color: white;
    font-weight: 600;
  }

  &:after {
    position: absolute;
    left: 0;
    bottom: -8px;
    content: '';
    width: 100%;
    border-bottom: solid 3px #8f6453;

    -webkit-transform: scaleX(0.0001);
    -ms-transform: scaleX(0.0001);
    transform: scaleX(0.0001);

    -webkit-transition: -webkit-transform 250ms ease-in-out;
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }

  @media only screen and (max-width: 3284px) {
    left: 90%;
  }

  @media only screen and (max-width: 2544px) {
    left: 87%;
  }

  @media only screen and (max-width: 1676px) {
    left: 84%;
  }

  @media only screen and (max-width: 1260px) {
    font-size: 18px;

    &:after {
      bottom: -6px;
    }
  }

  @media only screen and (max-width: 1176px) {
    left: 80%;
  }

  @media only screen and (max-width: 976px) {
    left: 75%;
  }

  @media only screen and (max-width: 850px) {
    left: 39%;
  }

  @media only screen and (max-width: 750px) {
    left: 35%;
  }

  @media only screen and (max-width: 640px) {
    left: 32%;
  }

  @media only screen and (max-width: 540px) {
    left: 28%;
  }

  @media only screen and (max-width: 380px) {
    left: 22%;
  }

  @media only screen and (max-width: 305px) {
    left: 15%;
  }
`;
