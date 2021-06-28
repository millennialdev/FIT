import styled from 'styled-components';
const Frame = styled.iframe`
  position: absolute;
  top: 20em;
  right: 6%;
  border-radius: 5px;
  width: calc(4.5 * 513px);
  height: calc(1.5 * 780px);

  @media only screen and (max-width: 3548px) {
    width: calc(4 * 513px);
  }

  @media only screen and (max-width: 3228px) {
    width: calc(3.5 * 513px);
  }

  @media only screen and (max-width: 2920px) {
    width: calc(3 * 513px);
  }

  @media only screen and (max-width: 2632px) {
    width: calc(2.5 * 513px);
  }

  @media only screen and (max-width: 2352px) {
    width: calc(2 * 513px);
  }

  @media only screen and (max-width: 2052px) {
    width: calc(1.5 * 513px);
  }

  @media only screen and (max-width: 1752px) {
    width: calc(1.3 * 513px);
    height: calc(1.3 * 780px);
  }

  @media only screen and (max-width: 1648px) {
    width: calc(1 * 513px);
  }

  @media only screen and (max-width: 1452px) {
    width: 100%;
    height: calc(0.75 * 780px);
    display: inline;
    position: static;
    margin-top: 2.5em;
  }
`;

const Map = () => {
  return (
    <Frame
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65427149748!2d-122.48214628422511!3d47.61317464001958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1624650193485!5m2!1sen!2sus'
      width='513'
      height='780'
      style={{ border: '0' }}
      allowfullscreen=''
      loading='lazy'
    ></Frame>
  );
};

export default Map;
