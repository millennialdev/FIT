import styled from 'styled-components';
import EmailBg from '../../../assets/images/email-form.jpg';

export const EmailContainer = styled.div`
  background-image: url(${EmailBg});
  background-repeat: no-repeat;
  background-position: center center;
  filter: grayscale(28%);
  background-size: cover;
  height: 500px;
  width: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2.5em;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100%;
    background-image: linear-gradient(
      rgba(27, 27, 27, 0.5),
      rgba(27, 27, 27, 0.25)
    );
  }
`;

export const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  h3 {
    text-align: center;
    margin-bottom: 0;
    font-size: clamp(2rem, 5vw, 4rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin: 0.25em auto 2em auto;
  }

  form {
    z-index: 10;
  }
`;

export const FormWrap = styled.div`
  input {
    font-family: 'Aileron', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: hsl(0, 0%, 11%);
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 56.72px;
    border-radius: 5px;
    border: none;
    margin-right: 1.25rem;
    transform: translateY(-3px);

    &::placeholder {
      font-family: 'Aileron', sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: hsl(0, 0%, 42%);
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 24px;
  background: hsl(99, 16%, 72%);
  color: #1b1b1b;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: hsl(99, 16%, 58%);
  }
`;
