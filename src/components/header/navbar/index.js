import Link from 'next/link';
import {
  Header,
  Logo,
  Nav,
  LinksContainer,
  NavItem,
  List,
  StyledLink,
  UnStyledLink,
  SvgMobile,
  LoginLogo,
} from './navbarStyles';
import LogoImage from '../../../assets/logo/fit_logo_white_cropped.png';

const Navbar = ({ toggle }) => {
  return (
    <Header>
      <Nav>
        <Link href='/' passHref>
          <UnStyledLink>
            <Logo src={LogoImage} alt='logo' height='50px' />
          </UnStyledLink>
        </Link>
        <SvgMobile onClick={toggle} />
        <LinksContainer>
          <List>
            <NavItem>
              <Link href='/locations' passHref>
                <StyledLink>Locations</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/training' passHref>
                <StyledLink>Training</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/ideas' passHref>
                <StyledLink>Ideas</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/about' passHref>
                <StyledLink>About</StyledLink>
              </Link>
            </NavItem>
          </List>
          <List>
            <NavItem>
              <Link href='/saved' passHref>
                <StyledLink>Saved</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/contact' passHref>
                <StyledLink>Contact Us</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/login' passHref>
                <StyledLink title='Login'>
                  Log In
                  <LoginLogo />
                </StyledLink>
              </Link>
            </NavItem>
          </List>
        </LinksContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
