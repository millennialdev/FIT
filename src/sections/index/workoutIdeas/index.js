import Link from 'next/link';
import {
  WorkoutContainer,
  CardContainer,
  Img,
  P,
  By,
  Author,
  PlayCircle,
} from './WorkoutStyles';
import { H2 } from '../space/GymSpaceStyles';

const WorkoutIdeas = ({ data }) => {
  return (
    <WorkoutContainer>
      <H2>{data.title}</H2>
      <CardContainer>
        {data.cards.map((card) => {
          return (
            <div key={card.id}>
              <Link href={card.videoLink} passHref>
                <PlayCircle isLight={card.lightButton} />
              </Link>
              <Link href={card.ideaLink} passHref>
                <Img className='preview-image' src={card.image} />
              </Link>
              <Link href={card.ideaLink} passHref>
                <P>{card.preview}</P>
              </Link>
              <By>
                By <Author>{card.author}</Author>
              </By>
            </div>
          );
        })}
      </CardContainer>
    </WorkoutContainer>
  );
};

export default WorkoutIdeas;
