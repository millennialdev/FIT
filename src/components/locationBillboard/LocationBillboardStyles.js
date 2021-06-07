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
`;

export const H1 = styled.h1`
  color: #1b1b1b;
  font-size: 48px;
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  margin: 0;
  text-align: left;
`;

export const P = styled.p`
  color: #1b1b1b;
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500; /* Medium */
  margin: 22px 0 0 0;
  text-align: left;
`;

export const Form = styled.form`
  background: #f5f0f0;
`;

export const FormContainer = styled.div``;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 2em 0;
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

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  color: #f5f0f0;
  background: #684a3e;
  border-radius: 5px;
  width: 332px;
  height: 63px;
  font-size: 26px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* Medium */
  display: block;
  margin: 0 auto 1em auto;
`;

export const ArrowDropdown = styled(Dropdown)`
  color: #1b1b1b;
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: relative;
  inset: 50px 0 0 19.75em;
`;

export const DropdownMap = styled(Map)`
  color: #1b1b1b;
  cursor: pointer;
  width: 20px;
  height: 20.42px;
  position: relative;
  inset: -58.2px 0 0 14px;
`;
