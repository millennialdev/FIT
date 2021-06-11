import { spaceData, typeData, workoutData } from '../src/sections/index/data';
import {
  Hero,
  GymSpace,
  BlogPreview,
  WorkoutIdeas,
} from '../src/sections/index';

export default function Home() {
  return (
    <>
      <Hero />
      <GymSpace data={spaceData} />
      <GymSpace data={typeData} />
      <BlogPreview />
      <WorkoutIdeas data={workoutData} />
    </>
  );
}
