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
    <>
      <Head>
        <title>Locations | Functional Intense Training</title>
      </Head>
      <ContentContainer>
        <Searchbar data={data.searchBar} />
        <Alert />
        <LocationAndMapContainer>
          <CardTitle title={data.cardTitleText} />
          <Card data={data.cards} />
          <Map />
        </LocationAndMapContainer>
      </ContentContainer>
    </>
  );
}
