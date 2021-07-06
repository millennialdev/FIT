import {
  Container,
  ActiveCard,
  TextContainer,
  Card,
  H4,
  P,
} from './TabsStyles';

const Tabs = () => {
  return (
    <Container>
      <ActiveCard>
        <TextContainer>
          <H4>Only you know why</H4>
          <P>
            Actually hammock taxidermy raclette occupy la croix next level 8-bit
            cloud bread glossier green juice kitsch taiyaki. Retro gluten-free
            vaporware craft beer next level seitan. Vice lomo blog put a bird on
            it tattooed.
          </P>
        </TextContainer>
      </ActiveCard>
      <Card>
        <TextContainer>
          <H4>02</H4>
          <H4>Limits do not exist</H4>
        </TextContainer>
      </Card>
      <Card>
        <TextContainer>
          <H4>03</H4>
          <H4>We didn&#39;t come this far to fail now.</H4>
        </TextContainer>
      </Card>
      <Card>
        <TextContainer>
          <H4>04</H4>
          <H4>Athletes provie it.</H4>
        </TextContainer>
      </Card>
    </Container>
  );
};

export default Tabs;
