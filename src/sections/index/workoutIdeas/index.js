import {
  WorkoutContainer,
  CardContainer,
  Card,
  Img,
  P,
  By,
  Author,
} from './WorkoutStyles';
import { H2 } from '../space/GymSpaceStyles';

const WorkoutIdeas = ({ data }) => {
  return (
    <WorkoutContainer>
      <H2>{data.title}</H2>
      <CardContainer>
        {data.cards.map((card) => {
          return (
            <Card key={card.id}>
              <Img src={card.image} />
              <P>{card.preview}</P>
              <By>
                By <Author>{card.author}</Author>
              </By>
            </Card>
          );
        })}
      </CardContainer>
    </WorkoutContainer>
  );
};

export default WorkoutIdeas;
