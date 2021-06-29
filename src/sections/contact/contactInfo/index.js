import Link from 'next/link';
import { TextContainer, H2, P1, Tel, Phone, H3, P2, A } from './ContactStyles';

const ContactInfo = () => {
  return (
    <>
      <TextContainer>
        <H2>Call Us</H2>
        <P1>
          Don’t want to send us an email, but still have questions about us, our
          memberships, partnerships, or sponsorships? Just hit our line, and
          we’re more than happy to work together with you.
        </P1>
        <Tel href='tel:+1-510-560-3795'>
          <Phone />
          (510) 560-3795
        </Tel>
      </TextContainer>

      <TextContainer>
        <H3>Not quite ready to talk with us?</H3>
        <P2>
          Checkout our quite comprehensive{' '}
          <Link href='/help-center' passHref>
            <A>Help Center</A>
          </Link>{' '}
          &amp;{' '}
          <Link href='/faq' passHref>
            <A>FAQ</A>
          </Link>
        </P2>
      </TextContainer>
    </>
  );
};

export default ContactInfo;
