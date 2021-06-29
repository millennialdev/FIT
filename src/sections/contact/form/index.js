import {
  FormContainer,
  H1,
  TheForm,
  Label,
  Input,
  MsgContainer,
  MsgInput,
  Button,
} from './FormStyles';

const Form = () => {
  return (
    <FormContainer>
      <H1>Contact Us</H1>
      <TheForm action='https://formspree.io/f/xbjqkoez' method='POST'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='_replyto' />
        <MsgContainer>
          <Label htmlFor='message'>Message</Label>
          <MsgInput id='message' name='message' />
        </MsgContainer>
        <Button type='submit'>Send</Button>
      </TheForm>
    </FormContainer>
  );
};

export default Form;
