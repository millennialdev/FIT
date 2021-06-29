import styled from 'styled-components';
import { BiPhone } from 'react-icons/bi';

export const TextContainer = styled.div`
  margin: 3.5em 0;
`;

export const H2 = styled.h2`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 42px;
  color: #f5f0f0;
  margin-bottom: 0.25em;
`;

export const P1 = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -5%;
  color: #f5f0f0;
  margin-bottom: 0.25em;
`;

export const Tel = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #bc988a;
`;

export const Phone = styled(BiPhone)`
  color: #f5f0f0;
  width: 25px;
  height: 25px;
  transform: translateY(7px);
  margin-right: 2.5px;
`;

export const H3 = styled.h3`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: #f5f0f0;
  margin-bottom: 0.5em;
`;

export const P2 = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 26px;
  margin: 0;
`;

export const A = styled.span`
  color: #bc988a;
  cursor: pointer;
`;
