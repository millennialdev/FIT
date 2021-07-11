import Link from 'next/link';
import { H2, H3, P } from '../Vision/VisionStyles';
import {
  Container,
  TextContainer,
  CardsContainer,
  CardContainer,
  Image,
  CardTextContainer,
  CardP,
  Ideas,
  StyledLink,
} from './ImpactStyles';
import { Arrow } from '../../index/space/GymSpaceStyles';
import CardImg1 from '../../../assets/images/card-s-1.jpg';
import CardImg2 from '../../../assets/images/saved-3.jpg';
import CardImg3 from '../../../assets/images/card-s-3.jpg';

const Impact = () => {
  return (
    <Container>
      <TextContainer>
        <H2>Our impact</H2>
        <H3>Leading with purpose</H3>
        <P>
          Actually hammock taxidermy raclette occupy la croix next level 8-bit
          cloud bread glossier green juice kitsch taiyaki. Retro gluten-free
          vaporware craft beer next level seitan. Vice lomo blog put a bird on
          it tattooed.
        </P>
        <Link href='/about/leading-with-purpose' passHref>
          <StyledLink>
            <div>
              Read More <Arrow />
            </div>
          </StyledLink>
        </Link>
      </TextContainer>
      <CardsContainer>
        <Link href='/about/grants-for-black-owned-businesses' passHref>
          <CardContainer>
            <Image src={CardImg1} alt='' />
            <CardTextContainer>
              <CardP>Grants for black-owned businesses</CardP>
              <Ideas>Ideas by fit</Ideas>
            </CardTextContainer>
          </CardContainer>
        </Link>
        <Link href='/about/bridging-the-gap-for-students-and-fitness' passHref>
          <CardContainer>
            <Image src={CardImg2} alt='' />
            <CardTextContainer>
              <CardP>Bridging the gap for students and fitness</CardP>
              <Ideas>Ideas by fit</Ideas>
            </CardTextContainer>
          </CardContainer>
        </Link>
        <Link href='/about/how-fit-helps-gym-owners-tackle-reopening' passHref>
          <CardContainer>
            <Image src={CardImg3} alt='' />
            <CardTextContainer>
              <CardP>How FIT helps gym owners tackle reopening</CardP>
              <Ideas>Ideas by fit</Ideas>
            </CardTextContainer>
          </CardContainer>
        </Link>
      </CardsContainer>
    </Container>
  );
};

export default Impact;
