import React from 'react';
import { Button } from '../../buttonElement.js';
import Spell1 from '../../../images/Spell_1.png'
import Spell2 from '../../../images/Spell_FlexPortal.png'

import {
    RoleContainer,
    RoleWrapper,
    RoleRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Zauber,
    ZauberBild,
    ZauberText
} from './RoleElements'

const RoleSection = () => {
    return (
        <>
            <RoleContainer lightBg={false} id="role">
                <RoleWrapper>
                    <RoleRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Role</TopLine>
                                <Subtitle darkText={false}>Eliotrope is a great choice either for solo-playing or placed in a team.</Subtitle>
                                <Heading lightText={true}>Positioner</Heading>
                                <Subtitle darkText={false}>
                                    Thanks to their main spell "Portal", Eliotropes are great positioners.
                                    <br />
                                    It allows allies and ennemies to walk through, to teleport to another portal or to cast spells into, to be able to hit nearly anywhere possible.
                                    <br />
                                    <br />
                                    Also Eliotropes have many other movement-spells to push & pull ennemies, allies and themselves or to create new portals.
                                </Subtitle>
                                <Heading lightText={true}>Damage Dealer</Heading>
                                <Subtitle darkText={false}>
                                    Eliotropes can be one of the best damage-dealers in Dofus.
                                    <br />
                                    Their signature Spell "Portal" increases the damage of everybody who hits through their Portals.
                                    <br />
                                    <br />
                                    <strong>Portal:</strong>
                                    <br />
                                    <Zauber>
                                        <ZauberBild src={Spell1}/>
                                        <ZauberText>
                                        Dmg Boost: 25% + 2%per cell the spell is "traveling" (blue lines on hover)
                                        </ZauberText>
                                    </Zauber>
                                    <br />
                                    <br />
                                    <strong>Flexible Portal:</strong>
                                    <br />
                                    <Zauber>
                                        <ZauberBild src={Spell2} />
                                        <ZauberText>Dmg Boost: 5%  + 2%per cell the spell is "traveling"</ZauberText>
                                    </Zauber>
                                </Subtitle>
                                <Heading lightText={true}>Healer</Heading>
                                <Subtitle darkText={false}>
                                    Eliotropes got multiple ways to heal allies.<br />
                                    Most of these are based on the maximum-haelthpoints of the target ("Curative Palm", "Healing", "Conflagration", "Mutual Assistence").<br />
                                    Intelligence-Eliotropes come with some more heal spells like "Wakfu-Ray" depending on their intelligence-stat and heal-stat or even based on the damage they do ("Virus", "Distribution").
                                    <br />
                                    <br />
                                    When there is an Eliotrope in your team who placed a Totem ("Distortion"), all team-members will get a small amount of heal when entering (walking, beeing pushed, ...) into a portal.
                                    <br />
                                    <br />
                                    Overall, portals increase your heal in the same way they increase your damage.<br />
                                    Additionally some spells like "Curative Palm" got higher base-heal when casted into a portal.

                                </Subtitle>
                                <BtnWrap>
                                    <Button to="tricks"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}
                                        primary={true}
                                        dark={true}
                                        dark2={true}>
                                        Tips & Tricks
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src="/" alt="/" />
                            </ImgWrap>
                        </Column2>
                    </RoleRow>
                </RoleWrapper>
            </RoleContainer>
        </>
    )
}

export default RoleSection
