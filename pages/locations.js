import Head from 'next/head';
import { Searchbar } from '../src/sections/locations';

export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations | Functional Intense Training</title>
      </Head>
      <Searchbar />
    </>
  );
}
