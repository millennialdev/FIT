import styled from 'styled-components';

const P = styled.p`
  font-family: 'Aileron', sans-serif;
  font-size: 13px;
  font-weight: 400;
  background: #f5f0f0;
  color: #1b1b1b;
  max-width: 380px;
  border-radius: 5px;
  text-align: center;
  padding: 0.75em 0.5em;
  margin: 3.75em 0 2.5em 0;
  overflow-wrap: break-word;

  @media only screen and (max-width: 428px) {
    width: 99%;
    margin: 3.75em auto 2.5em auto;
  }

  @media only screen and (max-width: 380px) {
    font-size: clamp(11px, 3.5vw, 13px);
  }
`;

const Span = styled.span`
  font-weight: 500;
  color: #7c5748;
  cursor: pointer;
`;

const Alert = () => {
  return (
    <P>
      Tell us your <Span>capacity</Span> and <Span>start date</Span> to view
      available inventory
    </P>
  );
};

export default Alert;
