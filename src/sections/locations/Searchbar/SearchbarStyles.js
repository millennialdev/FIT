import styled from 'styled-components';
import {
  IoMdArrowDropdown as Dropdown,
  IoMdSearch as SearchBefore,
} from 'react-icons/io';

export const Form = styled.form`
  width: 88%;
  margin: 3.5em auto 0 auto;
  border-bottom: 2px solid #8f6453;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(1, 230px 132px 140px 1fr);
`;

export const SearchIcon = styled(SearchBefore)`
  color: #f5f0f0;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 204px;
`;

export const SearchLabel = styled.label`
  display: none;
`;

export const Search = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding-left: 2em;
  color: #fff;
  transition: background 770ms ease;
  transition: padding-left 450ms ease-out;
  z-index: 3;

  &:focus {
    outline: none;
    padding-left: 0;
    background: #1b1b1b;
  }

  &::placeholder {
    color: #f5f0f0; /* Firefox */
  }

  &:-ms-input-placeholder {
    color: #f5f0f0; /* Internet Explorer 10-11 */
  }

  &::-ms-input-placeholder {
    color: #f5f0f0; /* Microsoft Edge */
  }
`;

export const Label = styled.label`
  display: none;
`;

export const Select = styled.select`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  height: 100%;
  cursor: pointer;
  color: #f5f0f0;
  padding: 0 2em 0 0.5em;
  margin-bottom: 23px;
  border: none;
  background: transparent;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  outline: none;
  text-align: right;
`;

export const Option = styled.option`
  color: #f5f0f0;
  background: hsl(0, 0%, 14%);
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

export const ArrowDropdown = styled(Dropdown)`
  color: #f5f0f0;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  position: absolute;
  inset: 205.25px 0 0 35.25em;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
