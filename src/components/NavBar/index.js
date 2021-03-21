import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>ElioPourLesNoobs</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="role" 
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Role</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="elements" 
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Elements</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="portals"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Portals</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="tricks"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Tips & Tricks</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="sets"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Sets</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
