import Link from 'next/link';
import {
  Container,
  Title,
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
      <Title>{data.title}</Title>
      <Link href='/locations' passHref>
        <StyledLink>
          {data.buttonTitle} <Arrow />
        </StyledLink>
      </Link>
      <CardContainer>
        <SpaceCard>
          <Img src={data.col1.image} />
          <Name className='names'>{data.col1.name}</Name>
        </SpaceCard>
        <SpaceCard>
          <Img src={data.col2.image} />
          <Name className='names'>{data.col2.name}</Name>
        </SpaceCard>
        <SpaceCard>
          <Img src={data.col3.image} />
          <Name className='names'>{data.col3.name}</Name>
        </SpaceCard>
        <SpaceCard>
          <Img src={data.col4.image} />
          <Name className='names'>{data.col4.name}</Name>
        </SpaceCard>
      </CardContainer>
    </Container>
  );
};

export default GymSpace;
