import {
  ErrorContainer,
  TextContainer,
  H1,
  Subtitle,
  Button,
} from './ErrorStyles';

const Error = () => {
  return (
    <ErrorContainer>
      <TextContainer>
        <H1>404: Not Found</H1>
        <Subtitle>
          Looks like the page you tried navigating to doesn&#39;t exist&#33;
        </Subtitle>
      </TextContainer>
      <Button>Go to Homepage</Button>
    </ErrorContainer>
  );
};

export default Error;
