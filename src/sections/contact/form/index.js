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
      <TheForm action=''>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='email' />
        <MsgContainer>
          <Label htmlFor='message'>Message</Label>
          <MsgInput id='message' />
        </MsgContainer>
        <Button>Send</Button>
      </TheForm>
    </FormContainer>
  );
};

export default Form;

{
  /* <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>  */
}
