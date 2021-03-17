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
                        News
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Über Uns
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        DHL-Paketshop
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Sortiment
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Öffnungszeiten
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
