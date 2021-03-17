import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaInstagram} from 'react-icons/fa';
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
                            <FooterLinkTitle>Title</FooterLinkTitle>
                                <FooterLink to="/">Link</FooterLink>
                                <FooterLink to="/">Link</FooterLink>
                                <FooterEmail>info@test.de</FooterEmail>
                                <FooterLink to="/">Link</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLink to="/datenschutz" smooth={true} duration={500} spy={true} exact='true'>Impressum</FooterLink>
                                <FooterLink to="/datenschutz" smooth={true} duration={500} spy={true} exact='true'>Datenschutz</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>ElioPourLesNoobs</SocialLogo>
                        <WebsiteRights>ElioPourLesNoobs © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/JanDupont/website_eliopourlesnoobs" target="_blank" aria-label="Facebook">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
