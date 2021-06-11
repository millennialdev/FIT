import Link from 'next/link';
import {
  BlogContainer,
  P,
  Subtitle,
  Img,
  TextContainer,
  StyledLink,
  H2,
} from './BlogPreviewStyles';
import { Arrow } from '../space/GymSpaceStyles';

const BlogPreview = () => {
  return (
    <BlogContainer>
      <TextContainer>
        <H2>Trainer of the Week</H2>
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
        <Link href='/blog/chad-chadsworth' passHref>
          <StyledLink>
            <div>
              View Full Blog <Arrow />
            </div>
          </StyledLink>
        </Link>
      </TextContainer>
      <Link href='/blog/chad-chadsworth' passHref>
        <Img />
      </Link>
    </BlogContainer>
  );
};

export default BlogPreview;
