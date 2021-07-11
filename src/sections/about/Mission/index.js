import { H1, P, Img } from './MissionStyles';
import MissionImg from '../../../assets/images/mission.jpg';

const Mission = () => {
  return (
    <>
      <H1>Our Mission</H1>
      <P>Empowering tomorrow’s gym owners and instructors</P>
      <Img src={MissionImg} alt='Man working out' />
    </>
  );
};

export default Mission;
