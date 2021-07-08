import Link from 'next/link';
import { H2 } from '../../index/space/GymSpaceStyles';
import { CardContainer, Img } from '../../index/workoutIdeas/WorkoutStyles';
import { WorkoutContainer, P } from './HealthStyles';

const HealthPreview = ({ data }) => {
  return (
    <WorkoutContainer>
      <H2>{data.title}</H2>
      <CardContainer>
        {data.cards.map((card) => {
          return (
            <div key={card.id}>
              <Link href={card.ideaLink} passHref>
                <Img className='preview-image' src={card.image} />
              </Link>
              <Link href={card.ideaLink} passHref>
                <P>{card.preview}</P>
              </Link>
            </div>
          );
        })}
      </CardContainer>
    </WorkoutContainer>
  );
};

export default HealthPreview;
