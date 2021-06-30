import '../styles/globals.css';
import Layout from '../src/components/layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/login' || router.pathname === '/signup') {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
