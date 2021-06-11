import Link from 'next/link';
import {
  Container,
  H2,
  CardContainer,
  SpaceCard,
  Img,
  Name,
  StyledLink,
  Arrow,
} from './GymSpaceStyles';

const GymSpace = ({ data }) => {
  return (
    <Container>
      <H2>{data.title}</H2>
      <Link href={data.buttonLink} passHref>
        <StyledLink>
          {data.buttonTitle} <Arrow />
        </StyledLink>
      </Link>
      <CardContainer>
        <Link href={data.col1.slug} passHref>
          <SpaceCard>
            <Img src={data.col1.image} />
            <Name className='names'>{data.col1.name}</Name>
          </SpaceCard>
        </Link>
        <Link href={data.col2.slug} passHref>
          <SpaceCard>
            <Img src={data.col2.image} />
            <Name className='names'>{data.col2.name}</Name>
          </SpaceCard>
        </Link>
        <Link href={data.col3.slug} passHref>
          <SpaceCard>
            <Img src={data.col3.image} />
            <Name className='names'>{data.col3.name}</Name>
          </SpaceCard>
        </Link>
        <Link href={data.col4.slug} passHref>
          <SpaceCard>
            <Img src={data.col4.image} />
            <Name className='names'>{data.col4.name}</Name>
          </SpaceCard>
        </Link>
      </CardContainer>
    </Container>
  );
};

export default GymSpace;
