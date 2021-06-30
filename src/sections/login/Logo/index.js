import { LogoContainer, Logo as L } from './LogoStyles';
import LogoImage from '../../../assets/logo/fit_logo_white_cropped.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' passHref>
      <LogoContainer>
        <L src={LogoImage} alt='logo' height='50px' />
      </LogoContainer>
    </Link>
  );
};

export default Logo;
