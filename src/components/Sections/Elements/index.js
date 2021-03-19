import React from 'react'
import {
    ElementsContainer,
    ElementsWrapper,
    ElementsTop,
    ElementsRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    TopSubtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Zauber,
    ZauberBild,
    ZauberText
} from './ElementsElements'

import Spell_Snub from '../../../images/Spell_Schmach.png'
import Spell_Persiflage from '../../../images/Spell_Persiflage.png'
import Spell_Sarcasm from '../../../images/Spell_Sarkasmus.png'
import Spell_Therapy from '../../../images/Spell_Therapie.png'
import Spell_Convulsion from '../../../images/Spell_Krampf.png'
import Spell_Shock from '../../../images/Spell_Schock.png'
import Spell_Lazybeam from '../../../images/Spell_Zwielichtstrahl.png'
import Spell_WakfuRay from '../../../images/Spell_Wakfustrahl.png'
import Spell_Virus from '../../../images/Spell_Virus.png'
import Spell_Offence from '../../../images/Spell_Brueskierung.png'
import Spell_Affront from '../../../images/Spell_Beleidigung.png'
import Spell_Parasite from '../../../images/Spell_Parasit.png'
import Spell_Affliction from '../../../images/Spell_Heimsuchung.png'
import Spell_Tribulation from '../../../images/Spell_Leiden.png'
import Spell_LightningFist from '../../../images/Spell_Blitzfaust.png'
import Spell_Insolence from '../../../images/Spell_Unverfrorenheit.png'
import Spell_Audacious from '../../../images/Spell_Tollkuehn.png'
import Spell_Composure from '../../../images/Spell_Dreistigkeit.png'
import Spell_Insult from '../../../images/Spell_Affront.png'
import Spell_Contempt from '../../../images/Spell_Verachtung.png'
import Spell_Bullying from '../../../images/Spell_Schikane.png'
import Spell_Sermon from '../../../images/Spell_Predigt.png'
import Spell_Sinecure from '../../../images/Spell_Zuckerschlecken.png'
import Spell_Ridicule from '../../../images/Spell_Gespoett.png'

const ElementsSection = () => {
    return (
        <>
            <ElementsContainer lightBg={false} id="elements">
                <ElementsWrapper>
                    <ElementsTop>
                        <TopLine>Elements</TopLine>
                        <TopSubtitle darkText={false}>
                            Overview about different elements on Eliotrope.
                            <br />
                            First of all, all Mono-Element-Builds are very good on Elio.
                            <br />
                            Hybrid-Builds are less good on Elio, except if you really want to use the utility of more than one element while also dealing some damage with the utility spell.
                            Usually your damage in Hybrid-Builds is way less than in Mono-Builds.
                            <br /> <br />
                            My personal preference for Hybrid-Builds  is 100%crit all elements full dmg in PvM, since vitality and %resistance do not realler matter when you're able to kite quite good.
                        </TopSubtitle>
                    </ElementsTop>
                    <ElementsRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={true}>Agility</Heading>
                                <Subtitle darkText={false}>
                                    Agility Eliotrope often is the first choice for beginners since it's very flexible and the high dodge helps you at the beginning to learn and focus on how portals work.
                                    <Zauber>
                                        <ZauberBild src={Spell_Insult} />
                                        <ZauberText>Insult is a melee AoE damage spell. When casted into a portal it reduces lock of enemy targets. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Contempt} />
                                        <ZauberText>Contempt is a linear AoE damage spell. It attracts all targets by 1 cell to the direction the spell is casted from.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Bullying} />
                                        <ZauberText>Bullying is a linear AoE damage spell. It pushes all targets 2 cells away from the center of the spell. Doesn't damage allies. </ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Sermon} />
                                        <ZauberText>Sermon is a high damage mid-range spell. It pushes the target 2 cells away from the direction the spell is casted from.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Sinecure} />
                                        <ZauberText>Sinecure is a low range damage spell. When casted into a portal it reduces the targets pushback-resistance.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Ridicule} />
                                        <ZauberText>Ridicule is a mid range damage spell. When casted into a portal it removes up to 4MP of the target.</ZauberText>
                                    </Zauber>
                                    Most agi Elios play the standard 11/6 agility set. <br/>
                                    There's also a 12/6 agility set (full allister, jammy jack) with less vita and %resistances but higher damage. <br/>
                                    Another possibility is to play a high mp-reduction agility set to make it even more difficult for your ennemies to ever reach you.<br/><br/>
                                    I don't recomment focusing on Sinecure by playing an agi pushback-dmg set since the spell really isn't good at the moment and the other agility spells only push 2 cells instead of 4.
                                </Subtitle>
                                <Heading lightText={true}>Intelligence</Heading>
                                <Subtitle darkText={false}>
                                    Intelligence Eliotropes come with more heal spells than other Eliotropes, as mentioned in "Roles" section.
                                    <Zauber>
                                        <ZauberBild src={Spell_Lazybeam} title="Lazybeam" />
                                        <ZauberText>Lazybeam is the only Eliotrope spell with lifesteal.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_WakfuRay} title="Wakfu-Ray" />
                                        <ZauberText>Wakfu-Ray deals damage to ennemies and heals allies based on your intelligence and heal stats.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Virus} title="Virus" />
                                        <ZauberText>Virus deals high damage to ennemies and heals each of your allies inside the AoE for 50% of total damage dealt.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Parasite} />
                                        <ZauberText>Parasite deals high damage and applies a poison to your target. This poison is equal to a Parasite hit without portals at the end of your targets turn.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Offence} />
                                        <ZauberText>Offence is a basic high-range attacking spell.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Affront} />
                                        <ZauberText>Affront only deals damage when casted into portals.</ZauberText>
                                    </Zauber>
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading lightText={true}>Strengh</Heading>
                                <Subtitle darkText={false}>
                                    Strengh Eliotrope comes with a lot of utility while attacking.<br />
                                    <Zauber>
                                        <ZauberBild src={Spell_Snub} title="Snub" />
                                        <ZauberText>Snub despells your target by 1 turn.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Persiflage} title="Persiflage" />
                                        <ZauberText>Persiflage applies -3 Range debuff to your target.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Sarcasm} title="Sarcasm" />
                                        <ZauberText>Sarcasm applies up to -30% critical hits debuff to your target.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Therapy} title="Therapy" />
                                        <ZauberText>Therapy is a high range damage spell. It pulls the target 2 cells to the direction it is casted from. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Convulsion} title="Convulsion" />
                                        <ZauberText>Convulsion is a mid range AoE damage spell.<br/>
                                                    Center: pushes 2 cells away from direction it's casted from.<br/>
                                                    Corners: pushes 2 cells away from the center.<br/>
                                                    Doesn't damage allies.
                                        </ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Shock} title="Shock" />
                                        <ZauberText>Shock is a mid range AoE damage spell. It pulls all targets to the center. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    Strengh Eliotropes often play Sets with high critical hits, high crit-dmg and fix-dmg, because most strengh spells don't have a high base damage.
                                </Subtitle>
                                <Heading lightText={true}>Chance</Heading>
                                <Subtitle darkText={false}>
                                    Chance Eliotrope Spells got the worst utility compared to other elements, but the chance-build comes with high very high range. Often chance is used as a surprise-build in 1v1 to avoid target %resistance stacking of your opponent.<br /><br />
                                    Another common chance build is based on Servitude-Belt, a legendary Item that applies "unmovable" state to you at the end of your turn untill you get hit. This build shines vs pushback damage ennemies, sometimes xelors and in PvM against any ennemies who move/teleport you.
                                    <Zauber>
                                        <ZauberBild src={Spell_Affliction} />
                                        <ZauberText>Affliction is a basic attacking spell with high range.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Tribulation} />
                                        <ZauberText>Tribulation is a linear AoE spell. Usefull to hit around corners or multiple targets at once.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_LightningFist} />
                                        <ZauberText>Lightning Fist deals damage and pushes your target by 2 cells (4 cells if casted into a portal).</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Insolence} />
                                        <ZauberText>Insolence is a low range damage spell. If casted into a portal it pushes yourself 2 cells away from the portal you've hit into.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Audacious} />
                                        <ZauberText>Audacious is a low range damage spell. It doesn't require line of sight.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <ZauberBild src={Spell_Composure} />
                                        <ZauberText>Composure is a very high range damage spell. It only deals dmg when casted into a portal.</ZauberText>
                                    </Zauber>
                                </Subtitle>

                            </TextWrapper>
                        </Column2>
                    </ElementsRow>
                </ElementsWrapper>
            </ElementsContainer>
        </>
    )
}

export default ElementsSection
