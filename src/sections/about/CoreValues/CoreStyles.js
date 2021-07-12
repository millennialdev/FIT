import styled from 'styled-components';
import { H2 as Title, H3 as Subtitle } from '../Vision/VisionStyles';

export const Container = styled.div`
  background: red;
  height: 300px;
  width: 26%;
  margin: 3em auto;
`;

export const H2 = styled(Title)`
  text-align: center;
`;

export const H3 = styled(Subtitle)`
  text-align: center;
`;
