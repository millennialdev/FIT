import styled from 'styled-components';

export const ErrorContainer = styled.div`
  margin: 30vh auto;
  text-align: center;
  width: 90%;

  @media only screen and (max-height: 1000px) {
    margin: 15vh auto;
  }
`;

export const TextContainer = styled.div``;

export const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 72px;
  letter-spacing: 1%;
  color: #f5f0f0;
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -4%;
  color: #f5f0f0;
`;

export const Button = styled.button`
  background: #8f6453;
  padding: 0.25em 1em;
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0%;
  border-radius: 5px;
  color: #f5f0f0;
`;
