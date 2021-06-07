import LocationBillboard from '../../components/locationBillboard';
import HeroImg from '../../assets/images/weightlifting-1.jpg';
import SmallHeroImg from '../../assets/images/rack-with-view.jpg';
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
      <Img1 src={HeroImg} valt='Weightlifting' />
      <Img2 src={SmallHeroImg} valt='Another Weightlifting Image' />
      <Button />
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
