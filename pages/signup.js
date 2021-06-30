import Head from 'next/head';
import { ContentContainer } from '../src/components';

import { Logo } from '../src/sections/login';
import { Form, AccountsInfo } from '../src/sections/signup';

export default function Login() {
  return (
    <>
      <Head>
        <title>Signup | Functional Intense Training</title>
      </Head>
      <ContentContainer>
        <Logo />
        <Form />
        <AccountsInfo />
      </ContentContainer>
    </>
  );
}
