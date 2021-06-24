import Head from 'next/head';
import {
  Searchbar,
  Alert,
  CardTitle,
  Card,
  Map,
} from '../src/sections/locations';

export default function Locations() {
  return (
    <div style={{ maxWidth: '88%', margin: '0 auto' }}>
      <Head>
        <title>Locations | Functional Intense Training</title>
      </Head>
      <Searchbar />
      <Alert />
      <CardTitle />
      <Card />
      <Card />
      <Card />
      <Card />
      <Map />
    </div>
  );
}
