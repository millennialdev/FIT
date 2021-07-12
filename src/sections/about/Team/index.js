import { H2 } from '../Vision/VisionStyles';
import { Container, TextContainer, H3, P, Button, Img } from './TeamStyles';
import TeamImg from '../../../assets/images/team.jpg';

const Team = () => {
  return (
    <Container>
      <TextContainer>
        <H2>Our team</H2>
        <H3>Disrupting the business of personal training.</H3>
        <P>
          Actually hammock taxidermy raclette occupy la croix next level 8-bit
          cloud bread glossier green juice kitsch taiyaki. Retro gluten-free
          vaporware craft beer next level seitan. Vice lomo blog put a bird on
          it tattooed. Wolf sartorial tofu crucifix, narwhal PBR&B poke bitters
          franzen glossier.
        </P>
        <Button>Join our team</Button>
      </TextContainer>
      <Img src={TeamImg} alt='Man gripping pull-up bar' />
    </Container>
  );
};

export default Team;
