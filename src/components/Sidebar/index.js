import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements.js';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="news" onClick={toggle}>
                        Role
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Elements
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Sets
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Portals
                    </SidebarLink>
                    <SidebarLink to="tricks" onClick={toggle}>
                        Tips & Tricks
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
