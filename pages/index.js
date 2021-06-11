import { data as spaceData } from '../src/sections/index/space/SpaceData';
import { data as typeData } from '../src/sections/index/workoutType/TypeData';
import { Hero, GymSpace, BlogPreview } from '../src/sections/index';

export default function Home() {
  return (
    <>
      <Hero />
      <GymSpace data={spaceData} />
      <GymSpace data={typeData} />
      <BlogPreview />
    </>
  );
}
