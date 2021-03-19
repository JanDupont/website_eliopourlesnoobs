import React from 'react'
import {
    PortalsContainer,
    PortalsWrapper,
    PortalsTop,
    PortalsRow,
    Column1,
    Column2,
    TopLine,
    ContentWrapper,
    Heading,
    Text,
    TopSubtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Zauber,
    ZauberBild,
    ZauberText,
    Topic,
    TopicContent
} from './PortalsElements'

import Portals_bsp_1 from '../../../images/Portals_bsp_1.png'
import Portals_bsp_2 from '../../../images/Portals_bsp_2.png'
import Portals_bsp_3 from '../../../images/Portals_bsp_3.png'
import Portals_bsp_4 from '../../../images/Portals_bsp_4.png'
import Portals_bsp_5 from '../../../images/Portals_bsp_5.png'
import Portals_bsp_6 from '../../../images/Portals_bsp_6.png'
import Portals_bsp_7 from '../../../images/InkedPortals_bsp_7_LI.jpg'
import Portals_bsp_8 from '../../../images/InkedPortals_bsp_8_LI.jpg'

const PortalsSection = () => {
    return (
        <>
            <PortalsContainer lightBg={false} id="portals">
                <PortalsWrapper>
                    <ContentWrapper>
                        <TopLine>Portals</TopLine>
                        <Topic>
                            <Heading lightText={true}>What is the number Portal number?</Heading>
                                <Text>
                                    The <strong style={{ color: '#299A9D' }}>number</strong> is just an indicator for which Portal disappears first, when we place more than 4 Portals. <br/>
                                    The Portal with <strong style={{ color: '#299A9D' }}>number 1</strong> will be removed first.<br/>
                                    <br/>
                                    One team can only have 4 Portals, it doesn't matter how many Eliotropes are in this team.<br/>
                                    This works for both teams separately, so there can be 8 Portals on the map: 4 from <strong style={{ color: '#E8392A' }}>team red</strong>, 4 from <strong style={{ color: '#2623E7' }}>team blue</strong>.
                                </Text>
                        </Topic>
                        <Topic>
                            <Heading lightText={true}>How to hit into portals?</Heading>
                            <TopicContent>
                                <Text>
                                    An attack leaves your portals the same direction and distance, which you are casting your spell into. <br /> <br />
                                    Imagine an arrow from your cell to the cell of the Portal in which you are entering your attack. <br /><br />
                                    Now simply take that arrow and put its tail to the Portal where your attack leaves. Don't change the direction of the arrow (so imagine it just like a vector, in case that helps).<br /><br />
                                    The Tip of the arrow now points to the cell where your attack will be finally casted.
                                </Text>
                                <ImgWrap>
                                    <Img src={Portals_bsp_1} />
                                    <Img src={Portals_bsp_2} />
                                    <Img src={Portals_bsp_3} />
                                </ImgWrap>
                            </TopicContent>
                        </Topic>
                        <Topic>
                            <Heading lightText={true}>How do portals connect?</Heading>
                            <TopicContent>
                                <Text>
                                    Portals don't connect randomly, there are some <strong style={{ color: '#299A9D' }}>rules</strong>: <br /> <br /> <br/>
                                    <TopLine>Rule 1</TopLine>Portals always connect to the next nearest Portal.
                                    <TopicContent>
                                        <ImgWrap>
                                            <Img src={Portals_bsp_4} />
                                        </ImgWrap>
                                        <Text>
                                            In this example, we're going to hit into <strong style={{ color: '#299A9D' }}>Portal 2</strong>.<br/>
                                            <strong style={{ color: '#299A9D' }}>Portal 1</strong> is closer to <strong style={{ color: '#299A9D' }}>Portal 2</strong> than <strong style={{ color: '#299A9D' }}>3</strong> & <strong style={{ color: '#299A9D' }}>4</strong>, so <strong style={{ color: '#299A9D' }}>Portal 2</strong> connects to <strong style={{ color: '#299A9D' }}>Portal 1</strong> first. <br/>
                                            The next nearest Portal then is <strong style={{ color: '#299A9D' }}>Portal 3</strong>, then <strong style={{ color: '#299A9D' }}>Portal 4</strong>.
                                        </Text>
                                    </TopicContent>
                                    <br/>
                                    <TopLine>Rule 2</TopLine>When there are more than one Portal with the <strong style={{ color: '#299A9D' }}>same distance</strong> from the Portal in which you're going to hit/walk into, it will connect "Clockwise", that means the blue lines will run Clockwise.
                                    <TopicContent>
                                        <ImgWrap>
                                            <Img src={Portals_bsp_5}/>
                                            <Img src={Portals_bsp_6}/>
                                        </ImgWrap>
                                        <Text>
                                            In this example, we're going to hit into <strong style={{ color: '#299A9D' }}>Portal 1</strong> <br/>
                                            Now <strong style={{ color: '#299A9D' }}>Portal 3, 2 and 4</strong> all have the <strong style={{ color: '#299A9D' }}>same distance</strong> to Portal 1.<br/>
                                            The game chooses the connection of the portals so that the <strong style={{ color: '#299A9D' }}>blue lines</strong> always run clockwise.
                                        </Text>
                                    </TopicContent>
                                    <br/>
                                    <TopLine>Rule 3</TopLine><strong style={{ color: '#299A9D' }}>Same distance</strong> (rule 2) AND <strong style={{ color: '#299A9D' }}>180° degree</strong> (so no visible rotation): reversed Dofus-AoE-Rotation
                                    <TopicContent>
                                        <ImgWrap>
                                            <Img src={Portals_bsp_7}/>
                                            <Img src={Portals_bsp_8}/>
                                        </ImgWrap>
                                        <Text>
                                            In this example you can see quite <strong style={{ color: '#299A9D' }}>rare case</strong> which does not happen very often.<br/> <br/>
                                            Just to understand how it works:<br/>
                                            It works like a <strong style={{ color: '#299A9D' }}>"reversed Dofus-AoE-Rotation"</strong>.<br/>
                                            Imagine checking cells 1 by 1 if there is a Portal on a cell, then the cells are passed through in this order (Screen 1 & 2).<br/>
                                            It is exactly opposite to the "normal Dofus-Aoe-Rotation".<br/><br/>
                                            The <strong style={{ color: '#299A9D' }}>"normal Dofus-AoE-Rotation"</strong> also starts where I've painted "1", but then goes on in the opposite direction (where I've painted 4->3->2->5->12->11->... you can test it very good with Cra Explosive-Arrow on low lvl mobs and see in which order they die).<br/><br/>

                                        </Text>
                                    </TopicContent>
                                </Text>
                            </TopicContent>
                        </Topic>
                    </ContentWrapper>
                </PortalsWrapper>
            </PortalsContainer>
        </>
    )
}

export default PortalsSection
