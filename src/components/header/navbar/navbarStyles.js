import styled from 'styled-components';
import Icon from '../../icon';

export const Header = styled.header`
  width: 100%;
  background: transparent;
  height: 100%;
`;

export const Nav = styled.nav`
  width: 88%;
  margin: 2em auto 0 auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 638px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  height: 50px;

  @media only screen and (max-width: 638px) {
    height: 35px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1014px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 638px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
`;

export const NavItem = styled.li``;

export const StyledLink = styled.a`
  margin: 0 1em;
  position: relative;
  cursor: pointer;
  transition: all 0.1s;
  text-decoration: none;
  font-weight: 400;
  transition: all 333ms ease-in;
  white-space: nowrap;

  &:hover {
    color: white;
  }

  &:after {
    position: absolute;
    left: 0;
    bottom: -13px;
    content: '';
    width: 100%;
    border-bottom: solid 3px #8f6453;

    -webkit-transform: scaleX(0.0001);
    -ms-transform: scaleX(0.0001);
    transform: scaleX(0.0001);

    -webkit-transition: -webkit-transform 250ms ease-in-out;
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }

  @media only screen and (max-width: 1014px) {
    &:after {
      bottom: -6px;
    }
  }
`;

export const UnStyledLink = styled.a`
  margin: auto 1em auto 1em;
  border-top-right-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const Svg = styled(Icon)`
  width: 12px;
  height: 12px;
  margin-left: 0.5em;
  fill: #f5f0f0;

  &:hover {
    fill: white;
  }
`;

export const SvgMobile = styled(Icon)`
  display: none;

  @media screen and (max-width: 638px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-30%, 173%);
    width: 3rem;
    height: 3rem;
    fill: #f5f0f0;
    cursor: pointer;

    &:hover {
      fill: white;
    }
  }
`;
