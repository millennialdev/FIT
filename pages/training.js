import Head from 'next/head';
import {
  Hero,
  PersonalTraining,
  Results,
  TrainerHero,
  Tabs,
  Tiers,
  TierXHero,
  SleepCoaching,
  TrainerForm,
} from '../src/sections/training';
import { ContentContainer } from '../src/components/index';

export default function Training() {
  return (
    <>
      <Head>
        <title>Training | Functional Intense Training</title>
      </Head>
      <Hero />
      <ContentContainer>
        <PersonalTraining />
        <Results />
      </ContentContainer>
      <TrainerHero />
      <Tabs />
      <ContentContainer style={{ margin: '7em auto 0 auto' }}>
        <Tiers />
      </ContentContainer>
      <TierXHero />
      <ContentContainer>
        <SleepCoaching />
        <TrainerForm />
      </ContentContainer>
    </>
  );
}
