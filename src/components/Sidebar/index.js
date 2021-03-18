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
                    <SidebarLink to="role" onClick={toggle}>
                        Role
                    </SidebarLink>
                    <SidebarLink to="elements" onClick={toggle}>
                        Elements
                    </SidebarLink>
                    <SidebarLink to="sets" onClick={toggle}>
                        Sets
                    </SidebarLink>
                    <SidebarLink to="portals" onClick={toggle}>
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
