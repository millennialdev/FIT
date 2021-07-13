import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import { data } from './Data';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper className='first'>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col1.title}</FooterLinkTitle>
              <Link href='/locations' passHref>
                <FooterLink>{data.col1.links.link1}</FooterLink>
              </Link>
              <Link href='/mission' passHref>
                <FooterLink>{data.col1.links.link2}</FooterLink>
              </Link>
              <Link href='/inclusion' passHref>
                <FooterLink>{data.col1.links.link3}</FooterLink>
              </Link>
              <Link href='/careers' passHref>
                <FooterLink>{data.col1.links.link4}</FooterLink>
              </Link>
              <Link href='/investors' passHref>
                <FooterLink>{data.col1.links.link5}</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col2.title}</FooterLinkTitle>
              <Link href='/brokers-and-landlords' passHref>
                <FooterLink>{data.col2.links.link1}</FooterLink>
              </Link>
              <Link href='/gym-owners-and-managers' passHref>
                <FooterLink>{data.col2.links.link2}</FooterLink>
              </Link>
              <Link href='/trainers' passHref>
                <FooterLink>{data.col2.links.link3}</FooterLink>
              </Link>
              <Link href='/influencers' passHref>
                <FooterLink>{data.col2.links.link4}</FooterLink>
              </Link>
              <Link href='/sponsorships' passHref>
                <FooterLink>{data.col2.links.link5}</FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{data.col3.title}</FooterLinkTitle>
              <Link href='/history' passHref>
                <FooterLink>{data.col3.links.link1}</FooterLink>
              </Link>
              <Link href='/testimonials' passHref>
                <FooterLink>{data.col3.links.link2}</FooterLink>
              </Link>
              <Link href='/faq' passHref>
                <FooterLink>{data.col3.links.link3}</FooterLink>
              </Link>
              <Link href='/contact-us' passHref>
                <FooterLink>{data.col3.links.link4}</FooterLink>
              </Link>
              <Link href='/terms-of-service' passHref>
                <FooterLink>{data.col3.links.link5}</FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref>
              <SocialLogo>FIT</SocialLogo>
            </Link>
            <WebsiteRights>
              Functional Intense Training © {new Date().getFullYear()} All
              rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
