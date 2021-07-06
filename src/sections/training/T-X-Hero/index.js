import { HeroContainer, TextContainer, H2, P, StyledLink } from './TXStyles';
import { ContentContainer } from '../../../components';
import { Arrow } from '../../index/space/GymSpaceStyles';
import Link from 'next/link';

const TXHero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <TextContainer>
          <H2>reach new heights with tier x</H2>
          <P>
            Our Personal Training reaches its peak with Tier X, the world's most
            advanced health and wellness coaching. Our holistic approach does
            more than redefine your workout—it transforms how you move, feel,
            and recharge.
          </P>
          <Link href='/' passHref>
            <StyledLink>
              <div>
                View Full Blog <Arrow />
              </div>
            </StyledLink>
          </Link>
        </TextContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default TXHero;
