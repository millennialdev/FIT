import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr);
  grid-gap: 50px;
  margin: 10em auto 7.5em auto;

  @media only screen and (max-width: 1125px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const H2 = styled.h2`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 96px;
  line-height: 88px;
  letter-spacing: -5.76px;
  color: #f5f0f0;
  max-width: 578px;
  text-transform: uppercase;
  margin: 0;

  @media only screen and (max-width: 445px) {
    font-size: clamp(62px, 20vw, 96px);
    line-height: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #f5f0f0;
  margin: 2em 0 0 0;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #f5f0f0;
  min-height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #f5f0f0;
  transition: border-bottom 0.33s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 2px solid #8f6453;
  }
`;

export const StyledLink = styled.a`
  color: hsl(17deg, 27%, 64%);
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.33s ease;

  &:hover {
    text-decoration: none;
    color: hsl(17deg, 27%, 54%);
  }
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #f5f0f0;
  margin: 3em 0;
`;

export const Button = styled.button`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  background: #8f6453;
  color: #f5f0f0;
  border-radius: 5px;
  width: 264px;
  height: 50px;
  border: none;

  @media only screen and (max-width: 445px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const NamesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
