import styled from 'styled-components';

export const ErrorContainer = styled.div`
  margin: 30vh auto;
  text-align: center;
  width: 90%;

  @media only screen and (max-height: 1200px) {
    margin: 15vh auto;
  }
`;

export const TextContainer = styled.div`
  margin: 5em auto;
`;

export const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 72px;
  letter-spacing: 1%;
  color: #f5f0f0;
  margin-bottom: 0.125em;

  @media only screen and (max-width: 260px) {
    word-break: break-word;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -4%;
  color: #f5f0f0;
  margin-top: 0.125em;
`;

export const Button = styled.button`
  background: #8f6453;
  padding: 0.25em 1em;
  border: none;
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0%;
  border-radius: 5px;
  color: #f5f0f0;
  cursor: pointer;
  transition: background 500ms ease;
  transition: color 300ms ease-in-out;

  &:hover {
    background: #f5f0f0;
    color: #1b1b1b;
  }
`;
