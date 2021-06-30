import Head from 'next/head';
import { ContentContainer } from '../src/components';
import { Logo, Form, AccountsInfo } from '../src/sections/login';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Functional Intense Training</title>
      </Head>
      <ContentContainer>
        <Logo />
        <Form />
        <AccountsInfo />
      </ContentContainer>
    </>
  );
}
