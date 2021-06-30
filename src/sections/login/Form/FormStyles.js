import styled from 'styled-components';
import {
  TheForm as TForm,
  FormContainer as Container,
  Button as B,
} from '../../contact/form/FormStyles';

export const FormContainer = styled(Container)`
  background: transparent;
  max-width: 710px;
  margin: 0 auto;
`;

export const TheForm = styled(TForm)`
  max-width: 100%;
`;

export const Button = styled(B)`
  margin: 3em auto 2.5em auto;
  line-height: 50px;
  width: 183px;
  height: 50px;
`;
