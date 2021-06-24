import styled from 'styled-components';
import {
  IoMdArrowDropdown as Dropdown,
  IoMdSearch as SearchBefore,
} from 'react-icons/io';

export const Form = styled.form`
  width: 100%;
  margin: 3.65em auto 0 auto;
  border-bottom: 2px solid #8f6453;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(1, 225px 132px 140px 1fr);

  @media only screen and (max-width: 1260px) {
    margin-top: 2.35em;
  }

  @media only screen and (max-width: 800px) {
    grid-gap: 12%;
    grid-template-columns: repeat(1, 145px 132px 140px);
  }

  @media only screen and (max-width: 638px) {
    margin-top: 4.65em;
    grid-gap: 8%;
    grid-template-columns: repeat(1, 145px 132px 125px);
  }

  @media only screen and (max-width: 638px) {
    grid-gap: 6%;
  }

  @media only screen and (max-width: 524px) {
    grid-template-columns: repeat(1, 145px 132px 55px);
    grid-gap: auto;
  }

  @media only screen and (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
    margin-top: 3em;
  }
`;

export const PlaceContainer = styled.div`
  @media only screen and (max-width: 428px) {
    width: 88%;
    margin: 0 auto;
    z-index: 2;
  }
`;

export const SearchIcon = styled(SearchBefore)`
  color: #f5f0f0;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 204px;
  z-index: 1;

  @media only screen and (max-width: 524px) {
    top: 210px;
  }

  @media only screen and (max-width: 428px) {
    top: 172px;
  }
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
  position: relative;
  transition: background 770ms ease;
  transition: padding-left 450ms ease-out;
  z-index: 3;
  text-overflow: ellipsis;

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

  @media only screen and (max-width: 524px) {
    padding-left: 1.45em;
  }

  @media only screen and (max-width: 428px) {
    padding-left: 0em;
    text-align: right;

    &:focus {
      background: hsl(0, 0%, 14%);
    }
  }

  @media only screen and (max-width: 320px) {
    font-size: clamp(12px, 5.5vw, 18px);
    height: 125%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media only screen and (max-width: 428px) {
    width: 88%;
    margin: 0 auto;
    display: block;
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
  margin-bottom: 23px;
  border: none;
  background: transparent;
  border-radius: 5px;
  outline: none;
  text-align: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;

  @media only screen and (max-width: 428px) {
    width: 100%;
    height: auto;

    &:focus {
      padding: 0.25em;
      background: hsl(0, 0%, 14%);
    }
  }
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
  float: right;
  margin: auto 0;
  padding: 0;
  width: 15px;
  height: 15px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 428px) {
    position: relative;
    top: 22.5px;
    width: 25px;
    height: 25px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 524px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 428px) {
    margin-bottom: 1em;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Button = styled.div`
  text-align: center;
  font-size: 10px;
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  height: 18px;
  width: 55px;
  line-height: ${({ filled }) => (filled ? '18px' : 'none')};
  border: ${({ filled }) => (filled ? 'none' : '2px solid #8f6453')};
  color: #f5f0f0;
  background: ${({ filled }) => (filled ? '#8f6453' : 'transparent')};
  border-radius: 25px;
  cursor: pointer;
  transition: background 333ms ease;

  &:hover {
    background: hsl(17, 27%, 54%);
  }

  @media only screen and (max-width: 524px) {
    margin: 0.4em 0;
  }
`;
