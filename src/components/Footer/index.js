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
                            <FooterLinkTitle>ElioPourLesNoobs</FooterLinkTitle>
                                <FooterLink to="role">Role</FooterLink>
                                <FooterLink to="elements">Elements</FooterLink>
                                <FooterLink to="sets">Sets</FooterLink>
                                <FooterLink to="portals">Portals</FooterLink>
                                <FooterLink to="tricks">Tips & Tricks</FooterLink>
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
