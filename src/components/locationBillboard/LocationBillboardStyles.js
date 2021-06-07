import styled from 'styled-components';
import { IoMdArrowDropdown as Dropdown } from 'react-icons/io';
import { BiMap as Map } from 'react-icons/bi';

export const BillboardContainer = styled.div`
  background: #f5f0f0;
  width: 100%;
  max-width: 436px;
  border-radius: 5px;
  padding: 1.2em 2.2em;
  z-index: 3;

  @media screen and (max-width: 750px) {
    margin: 0 auto 0 auto;
    margin-top: 1em;
  }

  @media screen and (max-width: 620px) {
    margin-top: 3.5em;
  }

  @media screen and (max-width: 420px) {
    margin-top: 2em;
  }
`;

export const H1 = styled.h1`
  color: #1b1b1b;
  font-size: 48px;
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  margin: 0;
  text-align: left;

  @media screen and (max-width: 550px) {
    font-size: clamp(1.5rem, 9vw, 3rem);
  }
`;

export const P = styled.p`
  color: #1b1b1b;
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500; /* Medium */
  margin: 22px 0 0 0;
  text-align: left;

  @media screen and (max-width: 550px) {
    font-size: clamp(0.95rem, 4vw, 1.375rem);
  }

  @media screen and (max-width: 276px) {
    margin: 12px 0 0 0;
  }
`;

export const Form = styled.form`
  background: #f5f0f0;
  width: 100%;

  @media screen and (max-width: 550px) {
    transform: scale(0.9);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 2em 0;

  @media screen and (max-width: 550px) {
    margin: 0.5em 0 1em 0;
  }

  @media screen and (max-width: 317px) {
    margin: 0.25em 0 0.5em 0;
  }

  @media screen and (max-width: 276px) {
    margin: 0;
  }
`;

export const Label = styled.label`
  color: #1b1b1b;
  font-size: 12.5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  position: relative;
  inset: -71.5px 0 0 20px;
  background: #f5f0f0;
  padding: 0 10px 0 10px;
  width: 100px;
  text-align: center;
`;

export const Select = styled.select`
  cursor: pointer;
  margin: 0 1% 0 1%;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  max-width: 100%;
  line-height: 46px;
  padding: 8px 24px 8px 40px;
  border: 1.5px solid #1b1b1b;
  background-color: transparent;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
    background: #f5f0f0;
  }

  @media screen and (max-width: 550px) {
    font-size: clamp(1.3rem, 6vw, 1.5rem);
  }
`;

export const Option = styled.option`
  color: #1b1b1b;
  background: hsl(0deg, 20%, 96%);
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

export const OptGroup = styled.optgroup`
  color: #684a3e;
  background: hsl(0deg, 20%, 96%);
  font-size: 26px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #f5f0f0;
  background: #684a3e;
  border-radius: 5px;
  padding: 0.4em 4em;
  font-size: 26px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* Medium */
  display: block;
  margin: 0 auto 1em auto;

  @media screen and (max-width: 550px) {
    font-size: clamp(1.35rem, 6vw, 1.625rem);
  }

  @media screen and (max-width: 300px) {
    padding: 0.4em 3.5em;
  }

  @media screen and (max-width: 285px) {
    padding: 0.4em 3em;
  }

  @media screen and (max-width: 260px) {
    padding: 0.4em 2em;
  }

  @media screen and (max-width: 276px) {
    margin: 0 auto;
  }
`;

export const ArrowDropdown = styled(Dropdown)`
  color: #1b1b1b;
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: relative;
  inset: 50px 0 0 19.75em;

  @media screen and (max-width: 430px) {
    inset: 50px 0 0 87%;
  }

  @media screen and (max-width: 380px) {
    inset: 50px 0 0 84%;
  }

  @media screen and (max-width: 295px) {
    inset: 50px 0 0 80%;
  }
`;

export const DropdownMap = styled(Map)`
  color: #1b1b1b;
  cursor: pointer;
  width: 20px;
  height: 20.42px;
  position: relative;
  inset: -58.2px 0 0 14px;
`;
