import Link from 'next/link';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  Svg,
} from './SidebarElements';
import { LoginLogo } from '../navbar/navbarStyles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href='/locations' passHref onClick={toggle}>
            <SidebarLink>Locations</SidebarLink>
          </Link>
          <Link href='/training' passHref onClick={toggle}>
            <SidebarLink>Training</SidebarLink>
          </Link>
          <Link href='/ideas' passHref onClick={toggle}>
            <SidebarLink>Ideas</SidebarLink>
          </Link>
          <Link href='/about' passHref onClick={toggle}>
            <SidebarLink>About</SidebarLink>
          </Link>
          <Link href='/saved' passHref onClick={toggle}>
            <SidebarLink>Saved</SidebarLink>
          </Link>
          <Link href='/contact' passHref onClick={toggle}>
            <SidebarLink>Contact Us</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href='/login' passHref onClick={toggle}>
            <SidebarRoute>
              Log In
              <LoginLogo style={{ color: '#1b1b1b' }} />
            </SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
