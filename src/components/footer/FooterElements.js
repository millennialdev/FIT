import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: transparent; /* background: transparent */
`;

export const FooterWrap = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
  color: #f5f0f0;

  @media only screen and (max-width: 820px) {
    align-items: center;
  }

  @media only screen and (max-width: 690px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0.75em;
  }

  @media only screen and (max-width: 425px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h3`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #f5f0f0;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  font-family: 'Aileron', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #f5f0f0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #bc988a;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media only screen and (max-width: 1050px) {
    justify-content: space-around;
  }

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SocialLogo = styled.a`
  font-family: 'Aileron', sans-serif;
  font-weight: 600;
  font-size: 2.07rem;
  color: #f5f0f0;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: hsl(17, 27%, 54%);
    transition: 0.3s ease-in-out;
  }
`;

export const WebsiteRights = styled.small`
  font-family: 'Aileron', sans-serif;
  font-weight: 500;
  font-size: 11px;
  color: #f5f0f0;
  margin-bottom: 16px;
  text-align: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media only screen and (max-width: 313px) {
    width: 200px;
  }

  @media only screen and (max-width: 220px) {
    width: 175px;
  }

  @media only screen and (max-width: 200px) {
    width: 100%;
    height: 240px;
    margin-top: 16px;
    flex-direction: column;
  }
`;

export const SocialIconLink = styled.a`
  color: #f5f0f0;
  font-size: 24px;

  &:hover {
    color: hsl(17, 27%, 54%);
    transition: 0.25s ease;
  }
`;
