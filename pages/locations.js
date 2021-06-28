import Head from 'next/head';
import {
  Searchbar,
  Alert,
  CardTitle,
  CardsContainer,
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
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          {/* {data.cards.map((card) {
            retrun (
              <Card key={card.id}>

              </Card>
            )
          })} */}
        </CardsContainer>
        <Map />
      </LocationAndMapContainer>
    </div>
  );
}
