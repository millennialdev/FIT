import Image from 'next/image';
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
  Svg,
} from './navbarStyles';
import LogoImage from '../../../assets/logo/fit_logo_white_cropped.png';
import LoginImage from '../../../assets/icons/user.svg';

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Link href='/' passHref>
          <UnStyledLink>
            <Logo src={LogoImage} alt='logo' height='50px' />
          </UnStyledLink>
        </Link>
        <LinksContainer>
          <List>
            <NavItem>
              <Link href='/locations' passHref>
                <StyledLink title='Locations'>Locations</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/training' passHref>
                <StyledLink title='Training'>Training</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/ideas' passHref>
                <StyledLink title='Ideas'>Ideas</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/about' passHref>
                <StyledLink title='About'>About</StyledLink>
              </Link>
            </NavItem>
          </List>
          <List>
            <NavItem>
              <Link href='/saved' passHref>
                <StyledLink title='Saved'>Saved</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/contact' passHref>
                <StyledLink title='Contertertertact Us'>Contact Us</StyledLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/login' passHref>
                <StyledLink title='Login'>
                  Log In
                  <Svg
                    id='Layer_1'
                    enable-background='new 0 0 512 512'
                    height='512'
                    viewBox='0 0 512 512'
                    width='512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <g>
                        <path d='m433 512c-11.046 0-20-8.954-20-20 0-78.299-63.701-142-142-142h-30c-78.299 0-142 63.701-142 142 0 11.046-8.954 20-20 20s-20-8.954-20-20c0-100.355 81.645-182 182-182h30c100.355 0 182 81.645 182 182 0 11.046-8.954 20-20 20z' />
                      </g>
                      <g>
                        <path d='m254 270c-74.439 0-135-60.561-135-135s60.561-135 135-135 135 60.561 135 135-60.561 135-135 135zm0-230c-52.383 0-95 42.617-95 95s42.617 95 95 95 95-42.617 95-95-42.617-95-95-95z' />
                      </g>
                    </g>
                  </Svg>
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
