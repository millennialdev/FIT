import { H1, Label, Input } from '../../contact/form/FormStyles';
import { FormContainer, TheForm, Button } from '../../login/Form/FormStyles';
import { Select, Option } from './FormStyles';

const Form = () => {
  return (
    <FormContainer>
      <H1>Functional Intense Training</H1>
      <TheForm action='https://formspree.io/f/xnqlzzwk' method='POST'>
        <Label htmlFor='name'>First Name</Label>
        <Input type='text' id='fname' name='First Name' required />
        <Label htmlFor='name'>Last Name</Label>
        <Input type='text' id='lname' name='Last Name' required />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='_replyto' required />
        <Label htmlFor='password'>Password (8 or more characters)</Label>
        <Input
          type='password'
          id='password'
          name='Password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
          /*
            I did the regex work for the following below, just incase you'll want to use it later.

            Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: 
          */
        />
        <Label htmlFor='userType'>User Type</Label>
        <Select id='userType' name='User Type' required>
          <Option disabled='' value='' style={{ display: 'none' }}></Option>
          <Option value='client'>Client</Option>
          <Option value='owner'>Owner</Option>
          <Option value='trainer'>Trainer</Option>
        </Select>
        <Button type='submit'>Log In</Button>
      </TheForm>
    </FormContainer>
  );
};

export default Form;
