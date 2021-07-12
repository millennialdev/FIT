import styled from 'styled-components';
import { H2 as Title, H3 as Subtitle } from '../Vision/VisionStyles';

export const Container = styled.div`
  /* background: red; */
  max-width: 500px;
  margin: 20em auto 10em auto;

  @media only screen and (max-width: 1880px) {
    margin: 5em auto 10em auto;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 auto 10em auto;
  }
`;

export const H2 = styled(Title)`
  text-align: center;
`;

export const H3 = styled(Subtitle)`
  text-align: center;
`;

export const Div = styled.div`
  margin: 1.5em auto 3em auto;
`;

export const UL = styled.ul`
  max-width: 75%;
  margin: 0 auto;
`;

export const LI = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #f5f0f0;
`;
