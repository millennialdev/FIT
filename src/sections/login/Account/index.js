import Link from 'next/link';
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import {
  ForgotContainer,
  StyledLink,
  P,
  HR,
  SocialLoginContainer,
  OAuthLogin,
  PSignup,
  Span,
} from './AccountStyles';

const AccountsInfo = () => {
  return (
    <>
      <ForgotContainer>
        <Link href='/login/forgot-password' passHref>
          <StyledLink>Forgot Password</StyledLink>
        </Link>
        <Link href='/login/forgot-username' passHref>
          <StyledLink>Forgot Username</StyledLink>
        </Link>
      </ForgotContainer>
      <HR />
      <P>or</P>
      <SocialLoginContainer>
        <Link href='/login/apple' passHref>
          <OAuthLogin style={{ background: '#f5f0f0', color: '#1b1b1b' }}>
            <FaApple />
            Login With Apple
          </OAuthLogin>
        </Link>
        <Link href='/login/facebook' passHref>
          <OAuthLogin style={{ background: '#4267B2', color: '#f5f0f0' }}>
            <FaFacebookF style={{ paddingRight: '0.35em' }} />
            Login With Facebook
          </OAuthLogin>
        </Link>
        <Link href='/login/google' passHref>
          <OAuthLogin style={{ background: '#fff', color: '#1b1b1b' }}>
            <FaGoogle />
            Login With Google
          </OAuthLogin>
        </Link>
        <Link href='/login/twitter' passHref>
          <OAuthLogin style={{ background: '#1DA1F2', color: '#ffffff' }}>
            <FaTwitter />
            Login With Twitter
          </OAuthLogin>
        </Link>
      </SocialLoginContainer>
      <PSignup>
        Don&#39;t have an account yet? Click{' '}
        <Link href='/signup' passHref>
          <Span>here</Span>
        </Link>{' '}
        to register
      </PSignup>
    </>
  );
};

export default AccountsInfo;
