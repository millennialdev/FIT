import Head from 'next/head';
import { ContentContainer } from '../src/components';
import {
  Mission,
  Vision,
  Impact,
  CoreValues,
  Team,
} from '../src/sections/about';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Functional Intense Training</title>
      </Head>
      <ContentContainer style={{ margin: '6.5em auto' }}>
        <Mission />
        <Vision />
        <Impact />
        <CoreValues />
        <Team />
      </ContentContainer>
    </>
  );
}
