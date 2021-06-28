import Head from 'next/head';
import Error from '../src/sections/404';
import { ContentContainer } from '../src/components';

export default function errorPage() {
  return (
    <>
      <Head>
        <title>404 | Functional Intense Training</title>
      </Head>
      <ContentContainer>
        <Error>hello world this is my cool error page! 🥵😎😘</Error>
      </ContentContainer>
    </>
  );
}
