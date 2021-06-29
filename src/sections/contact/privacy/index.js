import Link from 'next/link';
import { P1, A } from '../contactInfo/ContactStyles';

const PrivacyPolicy = () => {
  return (
    <P1 style={{ letterSpacing: '0%', margin: '2.75em 0' }}>
      By clicking the above button, you agree to our{' '}
      <Link href='/terms-of-service' passHref>
        <A>Terms of Service</A>
      </Link>{' '}
      and have read and understood our{' '}
      <Link href='/privacy-policy' passHref>
        <A>Privacy Policy</A>
      </Link>
      .
    </P1>
  );
};

export default PrivacyPolicy;
