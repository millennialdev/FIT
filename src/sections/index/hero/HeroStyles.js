import styled from 'styled-components';
import { HiOutlineArrowRight as RightArrow } from 'react-icons/hi';

export const SectionContainer = styled.div`
  width: 88%;
  margin: 8em auto 0 auto;
  display: flex;
  flex-direction: row;
  margin: 9em 0 10em 7.5%;
  max-width: 1500px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 84%;
  }

  @media screen and (max-width: 620px) {
    margin: 0;
    width: 100%;
  }
`;

export const Img1 = styled.img`
  z-index: 1;
  position: absolute;
  inset: 225px 0 0 16%;
  width: 69.5vw;
  height: 700px;
  border-radius: 5px;
  object-fit: cover;
  transition: all 0.33s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(245, 245, 240, 0.075);
  }

  @media screen and (max-width: 1880px) {
    inset: 225px 0 0 12%;
  }

  @media screen and (max-width: 1260px) {
    width: 65vw;
  }

  @media screen and (max-width: 944px) {
    width: 63vw;
  }

  @media screen and (max-width: 750px) {
    position: relative;
    inset: -70px 0 0 0;
    width: 64vw;
  }

  @media screen and (max-width: 725px) {
    width: 61vw;
  }

  @media screen and (max-width: 638px) {
    width: 59vw;
    inset: -75px 0 0 0;
  }

  @media screen and (max-width: 620px) {
    position: inherit;
    margin: 2.5em auto 3.5em auto;
    width: 100vw;
  }

  @media screen and (max-width: 500px) {
    height: 130vw;
  }
`;

export const Img2 = styled.img`
  z-index: 2;
  position: absolute;
  inset: 225px 0 0 87%;
  width: 120px;
  height: 700px;
  border-radius: 5px;
  object-fit: cover;
  transition: all 0.33s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(245, 245, 240, 0.075);
  }

  @media screen and (max-width: 1880px) {
    inset: 225px 0 0 84%;
  }

  @media screen and (max-width: 1260px) {
    inset: 225px 0 0 80%;
  }

  @media screen and (max-width: 944px) {
    inset: 225px 0 0 78%;
  }

  @media screen and (max-width: 750px) {
    inset: 225px 0 0 76.25%;
  }

  @media screen and (max-width: 725px) {
    inset: 225px 0 0 73%;
  }

  @media screen and (max-width: 638px) {
    inset: 190px 0 0 72%;
    width: 125px;
  }

  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const Button = styled(RightArrow)`
  position: absolute;
  background: hsl(0deg, 0%, 17%);
  color: #f5f0f0;
  width: 110px;
  height: 110px;
  padding: 1em;
  border-radius: 50%;
  border: 3.5px solid #b3c2ab;
  z-index: 3;
  inset: 515px 0 0 84.6%;
  cursor: pointer;

  @media screen and (max-width: 1880px) {
    inset: 515px 0 0 80%;
  }

  @media screen and (max-width: 1260px) {
    inset: 515px 0 0 73%;
  }

  @media screen and (max-width: 944px) {
    inset: 515px 0 0 71%;
  }

  @media screen and (max-width: 750px) {
    inset: 515px 0 0 66%;
  }

  @media screen and (max-width: 725px) {
    inset: 515px 0 0 63%;
  }

  @media screen and (max-width: 638px) {
    inset: 485px 0 0 60%;
  }

  @media screen and (max-width: 620px) {
    inset: 815px 0 0 40%;
    /* color: #1b1b1b;
    background: #f5f0f0;
    border: 5px solid hsl(99deg, 16%, 50%); */
  }

  @media screen and (max-width: 500px) {
    inset: 150vw 0 0 40%;
  }

  @media screen and (max-width: 441px) {
    inset: 156vw 0 0 38.5%;
  }

  @media screen and (max-width: 365px) {
    inset: 160vw 0 0 35%;
  }

  @media screen and (max-width: 325px) {
    inset: 165vw 0 0 32%;
  }
`;

// export const DotContainer = styled.div`
//   @media screen and (max-width: 620px) {
//     transform: rotate(-90deg);
//     height: 100%;
//     position: relative;
//     inset: -1175px 0 0 40px;
//     z-index: 99999;
//   }
// `;

// export const Dot = styled.div`
//   @media screen and (max-width: 620px) {
//     width: 19px;
//     height: 19px;
//     border-radius: 50%;
//     background: #f5f0f0;
//     margin: 2em 0;
//     &:first-child {
//       background: gray !important;
//     }
//   }
// `;
