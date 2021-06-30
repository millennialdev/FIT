import styled from 'styled-components';

export const ForgotContainer = styled.div`
  width: 470px;
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr);
  margin: 0.125em auto;

  @media only screen and (max-width: 555px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto 3.25em auto;
    width: 80%;
  }
`;

export const StyledLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #f5f0f0;
  transition: color 0.33s ease;

  &:hover {
    color: hsl(17, 27%, 64%);
  }

  @media only screen and (max-width: 555px) {
    margin: 0.35em auto;
  }
`;

export const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #f5f0f0;
  background: #1b1b1b;
  width: 40px;
  text-align: center;
  margin: 2em auto 0 auto;

  position: relative;
  top: -62px;
`;

export const HR = styled.hr`
  color: #f5f0f0;
  width: 120px;
  margin: 3em auto;
  border-radius: 5px;
  height: 2px;
`;

export const SocialLoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr 1fr 1fr);
  grid-gap: 18px;
  text-align: center;
  width: 67em;
  margin: 0 auto;

  @media only screen and (max-width: 1225px) {
    grid-template-columns: repeat(1, 1fr 1fr);
    width: 36em;
  }

  @media only screen and (max-width: 663px) {
    grid-template-columns: repeat(1, 1fr);
    width: 18em;
  }

  @media only screen and (max-width: 335px) {
    grid-template-columns: repeat(1, 1fr);
    width: 16.5em;
  }

  @media only screen and (max-width: 299px) {
    width: 99%;
  }
`;

export const OAuthLogin = styled.div`
  font-family: 'Aileron', sans-serif;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  padding: 0.5em 0.5em 0.5em 10%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, 22px 1fr);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 335px) {
    grid-gap: 5px;
  }

  @media only screen and (max-width: 299px) {
    grid-gap: 1px;
    padding: 0.25em 0.25em 0.25em 2.5%;
  }
`;

export const PSignup = styled(P)`
  margin: 6em auto;
  width: 100%;
`;

export const Span = styled.span`
  color: hsl(17, 27%, 54%);
  transition: color 0.38s ease;
  cursor: pointer;

  &:hover {
    color: #bc988a;
  }
`;
