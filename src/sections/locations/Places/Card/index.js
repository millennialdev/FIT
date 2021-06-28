import {
  CardContainer,
  Image,
  TextContainer,
  TitleContainer,
  H2,
  Heart,
  Location,
  P,
} from './CardStyles';
import Img1 from '../../../../assets/images/card-1.jpg';

const Card = () => {
  return (
    <CardContainer>
      <Image src={Img1} />
      <TextContainer>
        <TitleContainer>
          <H2>Sunset North</H2>
          <Heart isHeart={false} onDemand={true} />
        </TitleContainer>
        <Location>Seattle</Location>
        <P>Mother’s room · Service permitted · Parking · Bike storage · 9+</P>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
