import { Container, P, LeftContainer, Img } from './SleepStyles';
import { StyledLink, H2 } from '../T-X-Hero/TXStyles';
import { Arrow } from '../../index/space/GymSpaceStyles';
import SleepImg from '../../../assets/images/sleep.jpg';
import Link from 'next/link';

const Sleep = () => {
  return (
    <Container>
      <LeftContainer>
        <H2>sleep coaching</H2>
        <P style={{ marginTop: '2em' }}>
          Best. Sleep. Ever. Retrain your body and brain with Sleep Coaching
          designed just foryou. Collab with a trainer to unlock better sleep and
          transform how you move, feel, and own the day.
        </P>
        <P>Available at select clubs.</P>
        <Link href='/training/tier-x' passHref>
          <StyledLink>
            <div>
              Explore Tier X <Arrow />
            </div>
          </StyledLink>
        </Link>
      </LeftContainer>
      <Img src={SleepImg} alt='Woman falling asleep' />
    </Container>
  );
};

export default Sleep;
