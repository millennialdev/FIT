import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  background: rgba(245, 240, 240, 0.3);
  border-radius: 5px;
`;

export const H1 = styled.h1`
  font-family: 'Aileron', sans-serif;
  font-size: 50px;
  font-weight: 300;
  color: #f5f0f0;
  text-align: center;
  padding-top: 0.75em;
`;

export const TheForm = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* grid-gap: 30px; */
  max-width: 89%;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-family: 'Aileron', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #f5f0f0;
  margin-top: 1.5em;
`;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #f5f0f0;
  height: 38px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #f5f0f0;
  margin-top: 0.75em;
  background: transparent;
  transition: border-bottom 0.39s ease;

  &:focus {
    outline: none;
    border-bottom: 2.5px solid hsl(17, 27%, 54%);
  }
`;

export const MsgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 10px;
`;

export const MsgInput = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: #f5f0f0;
  margin-top: 1.25em;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #f5f0f0;
  height: 120px;
  transition: border-bottom 0.39s ease;

  &:focus {
    outline: none;
    border-bottom: 2.5px solid hsl(17, 27%, 54%);
  }
`;

export const Button = styled.button`
  font-family: 'Aileron', sans-serif;
  font-size: 20px;
  font-weight: 400;
  width: 124px;
  height: 38px;
  background: hsl(17, 27%, 44%);
  border-radius: 5px;
  color: #f5f0f0;
  border: none;
  margin: 1.75em auto 1.75em auto;
  transition: background 0.33s ease;
  cursor: pointer;

  &:hover {
    background: hsl(17, 27%, 39%);
  }
`;
