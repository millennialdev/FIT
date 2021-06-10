import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Hero, GymSpace } from '../src/sections/index';
import { data as spaceData } from '../src/sections/index/space/SpaceData';
import { data as typeData } from '../src/sections/index/workoutType/TypeData';

export default function Home() {
  return (
    <>
      <Hero />
      <GymSpace data={spaceData} />
      <GymSpace data={typeData} />
      <h1>aslkfjasldkfj</h1>
    </>
  );
}
