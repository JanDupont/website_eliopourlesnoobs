import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

import Navbar from '../components/NavBar'
import ElementsSection from '../components/Sections/Elements'
import PortalsSection from '../components/Sections/Portals'
import RoleSection from '../components/Sections/Role'
import Sets from '../components/Sets'
import Sidebar from '../components/Sidebar'
import TipsUndTricks from '../components/Sections/TipsUndTricks'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <RoleSection/>
            <ElementsSection/>
            <PortalsSection />
            <TipsUndTricks />
            <Sets />
            <Footer />
        </>
    )
}

export default Home
