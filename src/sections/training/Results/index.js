import { Container, LeftContainer, H2, Img } from './ResultStyles';
import { Accordion } from './Accordion';
import resultsImg from '../../../assets/images/results.jpg';

const Results = () => {
  return (
    <Container>
      <LeftContainer>
        <H2>make real results happen</H2>
        <Accordion />
      </LeftContainer>
      <Img src={resultsImg} />
    </Container>
  );
};

export default Results;
