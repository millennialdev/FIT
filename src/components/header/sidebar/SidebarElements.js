import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #1b1b1b;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(CgClose)`
  color: #f5f0f0;
  transition: all 0.3s ease-in;

  &:hover {
    color: #b3c2ab;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #f5f0f0;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 60px);
  text-align: center;
  padding-left: 0px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 50px);
  }

  @media screen and (max-height: 550px) {
    grid-template-rows: repeat(7, 40px);
  }

  @media screen and (max-height: 420px) {
    grid-template-rows: repeat(6, 40px);
  }
`;

export const SidebarLink = styled.button`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #f5f0f0;
  cursor: pointer;
  background: #1b1b1b;
  border: none;

  &:hover {
    color: #bc988a;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.button`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  border-radius: 50px;
  background: #b3c2ab;
  white-space: nowrap;
  padding: 16px 64px;
  color: #1b1b1b;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f5f0f0;
    color: #1b1b1b;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 48px;
    font-size: 14px;
  }
`;
