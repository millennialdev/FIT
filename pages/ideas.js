import Head from 'next/head';
import { ContentContainer } from '../src/components';
import {
  BlogPreview,
  LifeStylePreview,
  HealthPreview,
  EmailSignup,
} from '../src/sections/ideas';

export default function Ideas() {
  return (
    <>
      <Head>
        <title>Ideas | Functional Intense Training</title>
      </Head>
      <ContentContainer style={{ margin: '7.5em auto' }}>
        <BlogPreview />
        <LifeStylePreview />
        <HealthPreview />
      </ContentContainer>
      <EmailSignup />
    </>
  );
}
