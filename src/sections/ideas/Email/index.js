import Link from 'next/link';
import { EmailContainer, EmailContent, FormWrap, Button } from './EmailStyles';

const EmailSignup = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h3>Get the Latest Access to Exclusive Offers</h3>
        <p>
          Enter your email for the latest on fitness, nutrition + lifestyle from
          FIT!
        </p>
        <form action='#'>
          <FormWrap>
            <label htmlFor='email'>
              <input type='email' placeholder='Enter your email' id='email' />
            </label>
            <Link href='/email-signup-complete' passHref>
              <Button>Sign Up</Button>
            </Link>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  );
};

export default EmailSignup;
