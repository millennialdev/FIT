import { H1, Label, Input } from '../../contact/form/FormStyles';
import { FormContainer, TheForm, Button } from './FormStyles';

const Form = () => {
  return (
    <FormContainer>
      <H1>Functional Intense Training</H1>
      <TheForm action='https://formspree.io/f/xayabbpq' method='POST'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='_replyto' />
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          name='_password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        />
        <Button type='submit'>Log In</Button>
      </TheForm>
    </FormContainer>
  );
};

export default Form;
