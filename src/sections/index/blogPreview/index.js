import {
  BlogContainer,
  P,
  Subtitle,
  Img,
  TextContainer,
  StyledLink,
} from './BlogPreviewStyles';
import { H2, Arrow } from '../space/GymSpaceStyles';

const BlogPreview = () => {
  return (
    <BlogContainer>
      <TextContainer>
        <H2
          style={{
            margin: '0 auto 0.5em auto',
            letterSpacing: '2%',
            fontSize: '42px',
            textAlign: 'left',
          }}
        >
          Trainer of the Week
        </H2>
        <Subtitle>Chad Chadsworth</Subtitle>
        <P>
          Franzen photo booth flexitarian palo santo mustache salvia YOLO
          cornhole. Four dollar toast banjo typewriter asymmetrical mumblecore
          godard kale chips.
        </P>
        <P>
          Fixie vice tote bag hella farm-to-table. Iceland aesthetic occupy tote
          bag
        </P>
        <P>
          Church-key shabby chic drinking vinegar readymade try-hard hammock put
          a bird on it shaman fixie messenger bag selvage.
        </P>
        <StyledLink>
          <div>
            View Full Blog <Arrow />
          </div>
        </StyledLink>
      </TextContainer>
      <Img />
    </BlogContainer>
  );
};

export default BlogPreview;
