import {
  Container,
  H2,
  Form as MyForm,
  Label,
  Input,
  StyledLink,
  P,
  Button,
  NamesContainer,
  NameContainer,
} from './FormStyles';
import Link from 'next/link';

const Form = () => {
  return (
    <Container>
      <H2>meet with a trainer at fit</H2>
      <MyForm action='https://formspree.io/f/moqylzyq' method='POST'>
        <NamesContainer>
          <NameContainer>
            <Label htmlFor='fname'>First Name</Label>
            <Input type='text' id='fname' name='Fisrt Name' required />
          </NameContainer>
          <NameContainer>
            <Label htmlFor='lname'>Last Name</Label>
            <Input type='text' id='lname' name='Last Name' />
          </NameContainer>
        </NamesContainer>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='_replyto' required />
        <Label htmlFor='phone'>Phone Number</Label>
        <Input
          type='tel'
          id='phone'
          name='Phone Number'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          required
        />
        <P>
          I want to visit{' '}
          <Link href='/training/next-steps' passHref>
            <StyledLink>Select Club</StyledLink>
          </Link>
        </P>
        <Button type='submit'>Next</Button>
      </MyForm>
    </Container>
  );
};

export default Form;
