import {
  CardsContainer,
  CardContainer,
  Image,
  TextContainer,
  TitleContainer,
  H2,
  Heart,
  Location,
  P,
} from './CardStyles';

const Card = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((card) => {
        return (
          <CardContainer key={card.id}>
            <Image src={card.image} />
            <TextContainer>
              <TitleContainer>
                <H2>{card.title}</H2>
                <Heart isHeart={card.isHeart} />
              </TitleContainer>
              <Location>{card.city}</Location>
              <P>{card.copy}</P>
            </TextContainer>
          </CardContainer>
        );
      })}
    </CardsContainer>
  );
};

export default Card;
