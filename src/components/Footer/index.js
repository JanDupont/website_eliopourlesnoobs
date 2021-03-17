import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterEmail,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Adresse</FooterLinkTitle>
                                <FooterLink to="/">Rosenweg 12</FooterLink>
                                <FooterLink to="/">54411 Hermeskeil</FooterLink>
                                <FooterEmail href="mailto:info@lebensart-dupont.de">info@lebensart-dupont.de</FooterEmail>
                                <FooterLink to="/">06503/8933</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLink to="/datenschutz" smooth={true} duration={500} spy={true} exact='true'>Impressum</FooterLink>
                                <FooterLink to="/datenschutz" smooth={true} duration={500} spy={true} exact='true'>Datenschutz</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>LebensArt</SocialLogo>
                        <WebsiteRights>LebensArt © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/LebensartHermeskeil/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/lebensarthermeskeil/?hl=de" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
