import Link from 'next/link';
import LocationBillboard from '../../../components/locationBillboard';
import HeroImg from '../../../assets/images/weightlifting-1.jpg';
import SmallHeroImg from '../../../assets/images/rack-with-view.jpg';
import {
  Img1,
  Img2,
  Button,
  SectionContainer,
  // DotContainer,
  // Dot,
} from './HeroStyles';

const Hero = () => {
  return (
    <SectionContainer>
      <Link href='/locations/downtown-gym' passHref>
        <Img1 src={HeroImg} valt='Weightlifting' />
      </Link>
      <Link href='/locations/skyhigh-gym' passHref>
        <Img2 src={SmallHeroImg} valt='Another Weightlifting Image' />
      </Link>
      <Link href='/locations' passHref>
        <Button />
      </Link>
      <LocationBillboard />
      {/* <DotContainer>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot className='selected-dot' />
      </DotContainer> */}
    </SectionContainer>
  );
};

export default Hero;
