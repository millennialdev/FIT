import {
  Container,
  LeftContainer,
  ArticleContainer,
  Img,
  ImgBck,
  P,
} from './LifeStyles';
import { H2 } from '../../index/space/GymSpaceStyles';
import Img1 from '../../../assets/images/lifestyle-1.jpg';
import Img2 from '../../../assets/images/lifestyle-2.jpg';

const LifeStylePreview = () => {
  return (
    <>
      <H2>Lifestyle</H2>
      <Container>
        <LeftContainer>
          <ArticleContainer>
            <Img src={Img1} alt='Article 1' />
            <P>5 Self Care Habits to Help Your Daily Routine</P>
          </ArticleContainer>
          <ArticleContainer>
            <Img src={Img2} alt='Article 2' />
            <P>Your Mother&#39;s Day Gift Guide</P>
          </ArticleContainer>
        </LeftContainer>
        <ArticleContainer>
          <ImgBck alt='Article 3' />
          <P>7 Reasons Why You're Always Bloated</P>
        </ArticleContainer>
      </Container>
    </>
  );
};

export default LifeStylePreview;
