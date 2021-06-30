import { H1, Label, Input } from '../../contact/form/FormStyles';
import { FormContainer, TheForm, Button } from './FormStyles';

const Form = () => {
  return (
    <FormContainer>
      <H1>Functional Intense Training</H1>
      <TheForm action='https://formspree.io/f/xayabbpq' method='POST'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='Name' required />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='_replyto' required />
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          name='Password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
          required
        />
        <Button type='submit'>Log In</Button>
      </TheForm>
    </FormContainer>
  );
};

export default Form;
