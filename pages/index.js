import Head from 'next/head';
import { spaceData, typeData, workoutData } from '../src/sections/index/data';
import {
  Hero,
  GymSpace,
  BlogPreview,
  WorkoutIdeas,
} from '../src/sections/index';
import { ContentContainer } from '../src/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Functional Intense Training</title>
      </Head>
      <ContentContainer style={{ maxWidth: '100%' }}>
        <Hero />
        <GymSpace data={spaceData} />
        <GymSpace data={typeData} />
        <BlogPreview />
        <WorkoutIdeas data={workoutData} />
      </ContentContainer>
    </>
  );
}
