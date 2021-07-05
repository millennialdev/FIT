import styled from 'styled-components';

export const Tabs = styled.div`
  overflow: hidden;
`;

export const Tab = styled.div`
  width: 100%;
  color: white;
  overflow: hidden;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #1b1b1b;
  cursor: pointer;

  &:hover {
    background: hsl(0, 0%, 16%);
  }

  @media only screen and (max-width: 600px) {
    padding-left: 0px;
  }
`;

export const TabContent = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  max-height: 0;
  padding: 0 1em;
  color: #f5f0f0;
  background: #1b1b1b;
  transition: all 0.35s;
`;

export const HR = styled.hr`
  height: 3px;
  background: #8f6453;
  margin: 0;
  border: none;
  border-radius: 5px;
`;
