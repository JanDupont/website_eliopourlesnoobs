import React from 'react';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
} from './InfoMapElements'

const InfoSectionMap = () => {
    return (
        <>
            <InfoContainer lightBg={true} id="signup">
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>So erreichen Sie uns</TopLine>
                                <Heading lightText={false}>Öffnungszeiten</Heading>
                                <Subtitle darkText="false"><strong>Di, Do, Fr: </strong> 10.00-11:30 Uhr und 15:00-19:00 Uhr
                                    <br />
                                    <strong>Mi: </strong>10:00-11:30 Uhr
                                     <br />
                                     <strong>Sa: </strong>10:00-13:00 Uhr
                                     <br />
                                    oder tel. Terminabsprache
                                    <br />
                                    06503/8933
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <iframe title="Karte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.1977340560356!2d6.939151315923227!3d49.650573452554276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795852c7489513f%3A0x289e6d154a452c4e!2sLebensArt%20Dupont!5e0!3m2!1sen!2sde!4v1614959962859!5m2!1sen!2sde" width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowFullScreen="" loading="lazy" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSectionMap
