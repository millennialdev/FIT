import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr);
  grid-gap: 50px;
  background: blue;
  margin: 10em auto;
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
  background: green;
`;

export const Form = styled.form`
  background: red;
`;
