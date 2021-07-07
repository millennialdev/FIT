import { HeroContainer, Image, TextContainer, P, H1, PMod } from './BlogStyles';
import { H2 } from '../../index/space/GymSpaceStyles';

const BlogPreview = () => {
  return (
    <>
      <H2>Blog</H2>
      <HeroContainer>
        <Image></Image>
        <TextContainer>
          <P>TRAINING</P>
          <P>MAY 05, 2021</P>
          <P>Julie Bensom, Reebok Associate</P>
          <H1>How to Use a Foam Roller</H1>
          <PMod>Trainers give their top tips and best excersises</PMod>
        </TextContainer>
      </HeroContainer>
    </>
  );
};

export default BlogPreview;
