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
            </SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
