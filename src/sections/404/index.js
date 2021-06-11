import Link from 'next/link';
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
      <Link href='/' passHref>
        <Button>Go to Homepage</Button>
      </Link>
    </ErrorContainer>
  );
};

export default Error;
