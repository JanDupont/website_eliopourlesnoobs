import React, { useState } from 'react';
import Bild from '../../images/header.jpg';
import { 
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroP2
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Bild} />
            </HeroBg>
            <HeroContent>
                <HeroH1>ElioPourLesNoobs</HeroH1>
                <HeroP>
                    Everything you need to know to get started as Elio!
                </HeroP>
                <HeroP2>
                    By Shin-dei-ru (Echo)
                </HeroP2>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
