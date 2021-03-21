import React from 'react'
import { ContentWrapper,
    Heading,
    TipsTricksContainer,
    TipsTricksTop,
    TipsTricksWrapper,
    TopLine,
    Topic,
    Text,
    TopicContent,
    Zauber,
    ZauberBild,
    ZauberText
} from './TipsUndTricksElements'

import Spell_Conflagration from '../../../images/Spell_Umsturz.png'
import Spell_Distortion from '../../../images/Spell_Verzerrung.png'
import Spell_Portal from '../../../images/Spell_1.png'
import Spell_Stretching from '../../../images/Spell_Dehnung.png'
import Spell_Stupor from '../../../images/Spell_Stupor.png'
import Spell_Conjuration from '../../../images/Spell_Beschwoerung.png'

const TipsUndTricks = () => {
    return (
        <>
            <TipsTricksContainer lightBg={false} id="tricks">
                <TipsTricksWrapper>
                    <ContentWrapper>
                        <TipsTricksTop>
                            <TopLine>Tips & Tricks</TopLine>
                        </TipsTricksTop>
                        <Topic>
                            <Heading lightText={true}>You know everything about Eliotropes?</Heading>
                            <Text>Here are some usefull and not really well known things about Eliotropes.</Text>
                            <TopicContent>
                                <Zauber>
                                    <ZauberBild src={Spell_Conflagration} />
                                    <ZauberText>Conflagration does not only heal your target. It also reduces the damage of all enemies 2 cells around your target by 20%.</ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Distortion} />
                                    <ZauberText>
                                        Hitting your teams Eliotrope-Totem generates an open portal on the cell of the attacker. If there are 4 Portals of your team already, things will happen in the following order:<br/>
                                        1) Portal 1 will be removed <br/>
                                        2) A new open Portal is placed on the cell of the attacker.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Distortion} />
                                    <ZauberText>
                                    If there's already an open portal on your cell (for example when you end your turn on a portal and start on it next turn again it's technically open, you are just blocking it), Portal 1 won't be removed and no new Portal will be placed.<br/>
                                    The Portal you're standing on will simply be opened and if there are other open portals you'll get teleported.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Distortion} />
                                    <ZauberText>
                                        Walking through enemy Portals also heals your team-members, when your team has a totem.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Distortion} />
                                    <ZauberText>
                                        All Portals created by a totem will be removed when the totem dies.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Portal} />
                                    <ZauberText>
                                        An Elio in team A forbids team B to walk into Portals turn 1.<br/>
                                        An Elio in both teams forbids both teams to walk into Portals turn 1.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Stretching} />
                                    <ZauberText>
                                        Stretching buffs yourself +3 portal-range for one turn. It also buffs +3 range in general.<br/>
                                        You can use it on teammates to buff their range and still get the +3 portal-range yourself.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Stupor} />
                                    <ZauberText>
                                        Stupor is a trap, when triggered it creates a Portal on the same cell.<br/>
                                        The trap itself doesn't count as Portal, you can place infinite stupors.
                                    </ZauberText>
                                </Zauber>
                                <Zauber>
                                    <ZauberBild src={Spell_Conjuration} />
                                    <ZauberText>
                                        The effect of conjuration (30% vuln for 1 damage line) can be re-applied by moving the target through a portal.<br/>
                                        Due to this we can optimize our damage by chosing the right spells to move our target through portals.<br/>
                                        Spells which move the target before dealing damage re-apply conjuration, then consume it instantly (Therapy, Sermon).<br/>
                                        Spells which damage first and move afterwards re-apply conjuration but don't consume it (Contempt, Shock, Convulsion, Bullying, Lightning Fist). This is really important for Iops-Wrath or other big damage spells.
                                    </ZauberText>
                                </Zauber>
                                
                            </TopicContent>
                        </Topic>
                    </ContentWrapper>
                </TipsTricksWrapper>
            </TipsTricksContainer>
        </>
    )
}

export default TipsUndTricks
