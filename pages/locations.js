import Head from 'next/head';
import { data } from '../src/sections/locations/Data';
import {
  Searchbar,
  Alert,
  CardTitle,
  Card,
  Map,
  LocationAndMapContainer,
} from '../src/sections/locations';

export default function Locations() {
  return (
    <div style={{ maxWidth: '88%', margin: '0 auto' }}>
      <Head>
        <title>Locations | Functional Intense Training</title>
      </Head>
      <Searchbar />
      <Alert />
      <LocationAndMapContainer>
        <CardTitle />
        <Card data={data.cards} />
        <Map />
      </LocationAndMapContainer>
    </div>
  );
}
