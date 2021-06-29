import Head from 'next/head';
import styled from 'styled-components';
import { ContentContainer } from '../src/components';
import {
  Form,
  PrivacyPolicy,
  Divider,
  ContactInfo,
} from '../src/sections/contact';

const FormContentContainer = styled(ContentContainer)`
  max-width: 73%;
  margin: 5em auto;

  @media only screen and (max-width: 1260px) {
    max-width: 88%;
  }
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Functional Intense Training</title>
      </Head>
      <FormContentContainer>
        <Form />
        <PrivacyPolicy />
        <Divider />
        <ContactInfo />
      </FormContentContainer>
    </>
  );
}
