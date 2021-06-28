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
import { ContentContainer } from '../src/components';

export default function Locations() {
  return (
    <ContentContainer>
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
    </ContentContainer>
  );
}
