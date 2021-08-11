import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub} from 'react-icons/fa';
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
    SocialIconLink,
    FooterLinkHref
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
                            <FooterLinkTitle>ElioPourLesNoobs</FooterLinkTitle>
                                <FooterLink to="role" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Role</FooterLink>
                                <FooterLink to="elements" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Elements</FooterLink>
                                <FooterLink to="sets" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sets</FooterLink>
                                <FooterLink to="portals" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Portals</FooterLink>
                                <FooterLink to="tricks" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tips & Tricks</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkHref href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank">Legit broken set</FooterLinkHref>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>ElioPourLesNoobs</SocialLogo>
                        <WebsiteRights>ElioPourLesNoobs © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
