import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ContentContainer } from '../src/components';
import { H1, LocationAndMapContainer, A } from '../src/sections/saved';

import { CardTitle, Card, Map } from '../src/sections/locations';
import { data } from '../src/sections/saved/Data';

export default function Saved() {
  const [saved, setSaved] = useState(true); // Switch this to "false" if you want to see what it looks like without saved content
  return (
    <>
      <Head>
        <title>Saved | Functional Intense Training</title>
      </Head>
      <ContentContainer>
        <H1>Saved</H1>
        {saved ? (
          <LocationAndMapContainer>
            <CardTitle title={data.cardTitleText} />
            <Card data={data.cards} />
            <Map />
          </LocationAndMapContainer>
        ) : (
          <>
            {' '}
            <h3>Nothing to see here yet...</h3>
            <p>
              Start saving{' '}
              <Link href='/locations' passHref>
                <A>locations</A>
              </Link>{' '}
              you like so you can easily find them again here!
            </p>
          </>
        )}
      </ContentContainer>
    </>
  );
}
