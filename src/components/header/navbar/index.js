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
  MobileIcon,
  SvgMobile,
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
        <SvgMobile
          id='Layer_1'
          enable-background='new 0 0 512 512'
          height='512'
          viewBox='0 0 512 512'
          width='512'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <g id='Menu_1_'>
              <path
                d='M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z'
              />
              <path
                d='M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z'
              />
              <path
                d='M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
			c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z'
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </SvgMobile>
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
