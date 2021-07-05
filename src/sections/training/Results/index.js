import { Container, LeftContainer, Img } from './ResultStyles';
import { H2 } from '../Personal/PersonalStyles';
import { Accordion } from './Accordion';
import resultsImg from '../../../assets/images/results.jpg';

const Results = () => {
  return (
    <Container>
      <LeftContainer>
        <H2 style={{ maxWidth: '494px' }}>make real results happen</H2>
        <Accordion />
      </LeftContainer>
      <Img src={resultsImg} />
    </Container>
  );
};

export default Results;
