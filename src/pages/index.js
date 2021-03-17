import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

import Navbar from '../components/NavBar'
import RoleSection from '../components/Sections/Role'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

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
            <Services />
            <Footer />
        </>
    )
}

export default Home
