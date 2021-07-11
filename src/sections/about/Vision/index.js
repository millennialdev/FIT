import { Container, H2, H3, P } from './VisionStyles';
import { Img } from '../Mission/MissionStyles';
import VisionImg from '../../../assets/images/vision.jpg';

const Vision = () => {
  return (
    <>
      <Container>
        <H2>Our Vision</H2>
        <H3>Building a global community of fitness</H3>
        <P>
          Actually hammock taxidermy raclette occupy la croix next level 8-bit
          cloud bread glossier green juice kitsch taiyaki. Retro gluten-free
          vaporware craft beer next level seitan. Vice lomo blog put a bird on
          it tattooed. Wolf sartorial tofu crucifix, narwhal PBR&B poke bitters
          franzen glossier. Gochujang chillwave direct trade ugh pitchfork
          squid. Letterpress crucifix locavore, PBR&B forage slow-carb master
          cleanse chicharrones neutra sriracha swag.
        </P>
        <P>
          Chia bushwick kogi vice. Typewriter leggings helvetica organic marfa
          snackwave austin listicle enamel pin sartorial DIY migas. Food truck
          mumblecore pug leggings street art single-origin coffee quinoa banh mi
          gochujang. Truffaut +1 typewriter plaid disrupt, kale chips succulents
          snackwave messenger bag heirloom art party yr kickstarter photo booth
          marfa. Tumeric knausgaard fam, pinterest street art tote bag vice.
          Letterpress pabst affogato small batch, marfa yr twee actually viral
          trust fund palo santo chillwave kinfolk readymade direct trade.
        </P>
      </Container>
      <Img src={VisionImg} alt='Women working out' />
    </>
  );
};

export default Vision;
