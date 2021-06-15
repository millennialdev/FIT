import Head from 'next/head';
import Error from '../src/sections/404';

export default function errorPage() {
  return (
    <>
      <Head>
        <title>404 | Functional Intense Training</title>
      </Head>
      <Error>hello world this is my cool error page! 🥵😎😘</Error>
    </>
  );
}
