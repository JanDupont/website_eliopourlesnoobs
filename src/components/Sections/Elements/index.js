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

import SpellTooltip from '../../SpellTooltips'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';

import Spell_Beschreibung_Insult from '../../../images/Spell_Beschreibung_Affront.png'
import Spell_Beschreibung_Contempt from '../../../images/Spell_Beschreibung_Verachtung.png'
import Spell_Beschreibung_Bullying from '../../../images/Spell_Beschreibung_Schikane.png'
import Spell_Beschreibung_Sermon from '../../../images/Spell_Beschreibung_Predigt.png'
import Spell_Beschreibung_Sinecure from '../../../images/Spell_Beschreibung_Zuckerschlecken.png'
import Spell_Beschreibung_Ridicule from '../../../images/Spell_Beschreibung_Gespoett.png'
import Spell_Beschreibung_Snub from '../../../images/Spell_Beschreibung_Schmach.png'
import Spell_Beschreibung_Persiflage from '../../../images/Spell_Beschreibung_Persiflage.png'
import Spell_Beschreibung_Sarcasm from '../../../images/Spell_Beschreibung_Sarkasmus.png'
import Spell_Beschreibung_Therapy from '../../../images/Spell_Beschreibung_Therapie.png'
import Spell_Beschreibung_Convulsion from '../../../images/Spell_Beschreibung_Krampf.png'
import Spell_Beschreibung_Shock from '../../../images/Spell_Beschreibung_Schock.png'
import Spell_Beschreibung_Lazybeam from '../../../images/Spell_Beschreibung_Zwielichtstrahl.png'
import Spell_Beschreibung_WakfuRay from '../../../images/Spell_Beschreibung_WakfuStrahl.png'
import Spell_Beschreibung_Virus from '../../../images/Spell_Beschreibung_Virus.png'
import Spell_Beschreibung_Parasite from '../../../images/Spell_Beschreibung_Parasit.png'
import Spell_Beschreibung_Offence from '../../../images/Spell_Beschreibung_Brueskierung.png'
import Spell_Beschreibung_Affront from '../../../images/Spell_Beschreibung_Beleidigung.png'
import Spell_Beschreibung_Affliction from '../../../images/Spell_Beschreibung_Heimsuchung.png'
import Spell_Beschreibung_Tribulation from '../../../images/Spell_Beschreibung_Leiden.png'
import Spell_Beschreibung_LightningFist from '../../../images/Spell_Beschreibung_Blitzfaust.png'
import Spell_Beschreibung_Insolence from '../../../images/Spell_Beschreibung_Unverfrorenheit.png'
import Spell_Beschreibung_Audacious from '../../../images/Spell_Beschreibung_Tollkuehn.png'
import Spell_Beschreibung_Composure from '../../../images/Spell_Beschreibung_Dreistigkeit.png'


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
                            My personal preference for Hybrid-Builds  is 100%crit all elements full dmg in PvM, since vitality and %resistance do not really matter when you're able to kite quite good.
                        </TopSubtitle>
                    </ElementsTop>
                    <ElementsRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={true} style={{ color: '#899A55' }}>Agility</Heading>
                                <Subtitle darkText={false}>
                                    Agility Eliotrope often is the <strong style={{ color: '#299A9D' }}>first choice for beginners</strong> since it's very flexible and the high dodge helps you at the beginning to learn and focus on how portals work.
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Insult}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Insult} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Insult</strong> is a melee AoE damage spell. When casted into a portal it reduces lock of enemy targets. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Contempt}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Contempt} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Contempt</strong> is a linear AoE damage spell. It attracts all targets by 1 cell to the direction the spell is casted from.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Bullying}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Bullying} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Bullying</strong> is a linear AoE damage spell. It pushes all targets 2 cells away from the center of the spell. Doesn't damage allies. </ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Sermon}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Sermon} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Sermon</strong> is a high damage mid-range spell. It pushes the target 2 cells away from the direction the spell is casted from.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Sinecure}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Sinecure} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Sinecure</strong> is a low range damage spell. When casted into a portal it reduces the targets pushback-resistance.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Ridicule}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Ridicule} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#899A55' }}>Ridicule</strong> is a mid range damage spell. When casted into a portal it removes up to 4MP of the target.</ZauberText>
                                    </Zauber>
                                    Most agi Elios play the standard 11/6 agility set. <br />
                                    There's also a 12/6 agility set (full allister, jammy jack) with less vita and %resistances but higher damage. <br />
                                    Another possibility is to play a high mp-reduction agility set to make it even more difficult for your ennemies to ever reach you.<br /><br />
                                    I don't recomment focusing on Sinecure by playing an agi pushback-dmg set since the spell really isn't good at the moment and the other agility spells only push 2 cells instead of 4.
                                </Subtitle>
                                <Heading lightText={true} style={{ color: '#B23404' }}>Intelligence</Heading>
                                <Subtitle darkText={false}>
                                    Intelligence Eliotropes come with more heal spells than other Eliotropes, as mentioned in "Roles" section.
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Lazybeam}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Lazybeam} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#B23404' }}>Lazybeam</strong> is the only Eliotrope spell with lifesteal.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_WakfuRay}></SpellTooltip>}>
                                            <ZauberBild src={Spell_WakfuRay} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#B23404' }}>Wakfu-Ray</strong> deals damage to ennemies and heals allies based on your intelligence and heal stats.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Virus}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Virus} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#B23404' }}>Virus</strong> deals high damage to ennemies and heals each of your allies inside the AoE for 50% of total damage dealt.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Parasite}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Parasite} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#B23404' }}>Parasite</strong> deals high damage and applies a poison to your target. This poison is equal to a Parasite hit without portals at the end of your targets turn.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Offence}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Offence} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#B23404' }}>Offence</strong> is a basic high-range attacking spell.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Affront}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Affront} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#D23300' }}>Affront</strong> only deals damage when casted into portals.</ZauberText>
                                    </Zauber>
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading lightText={true} style={{ color: '#87572C'}}>Strength</Heading>
                                <Subtitle darkText={false}>
                                    Strength Eliotrope comes with a lot of utility while attacking.<br />
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Snub}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Snub} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Snub</strong> despells your target by 1 turn.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                        <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Persiflage}></SpellTooltip>}>
                                            <ZauberBild src={Spell_Persiflage} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Persiflage</strong> applies -3 Range debuff to your target.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Sarcasm}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Sarcasm} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Sarcasm</strong> applies up to -30% critical hits debuff to your target.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Therapy}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Therapy} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Therapy</strong> is a high range damage spell. It pulls the target 2 cells to the direction it is casted from. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Convulsion}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Convulsion} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Convulsion</strong> is a mid range AoE damage spell.<br />
                                                    Center: pushes 2 cells away from direction it's casted from.<br />
                                                    Corners: pushes 2 cells away from the center.<br />
                                                    Doesn't damage allies.
                                        </ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Shock}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Shock} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#87572C' }}>Shock</strong> is a mid range AoE damage spell. It pulls all targets to the center. Doesn't damage allies.</ZauberText>
                                    </Zauber>
                                    Strength Eliotropes often play Sets with high critical hits, high crit-dmg and fix-dmg, because most strength spells don't have a high base damage.
                                </Subtitle>
                                <Heading lightText={true} style={{color: '#85C8ED'}}>Chance</Heading>
                                <Subtitle darkText={false}>
                                    Chance Eliotrope Spells got the worst utility compared to other elements, but the chance-build comes with very high range. Often chance is used as a surprise-build in 1v1 to avoid target %resistance stacking of your opponent.<br /><br />
                                    Another common chance build is based on Servitude-Belt, a legendary Item that applies "unmovable" state to you at the end of your turn untill you get hit. This build shines vs pushback damage ennemies, sometimes xelors and in PvM against any ennemies who move/teleport you.
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Affliction}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Affliction} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Affliction</strong> is a basic attacking spell with high range.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Tribulation}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Tribulation} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Tribulation</strong> is a linear AoE spell. Usefull to hit around corners or multiple targets at once.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_LightningFist}></SpellTooltip>}>
                                        <ZauberBild src={Spell_LightningFist} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Lightning Fist</strong> deals damage and pushes your target by 2 cells (4 cells if casted into a portal).</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Insolence}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Insolence} />
                                    </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Insolence</strong> is a low range damage spell. If casted into a portal it pushes yourself 2 cells away from the portal you've hit into.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Audacious}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Audacious} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Audacious</strong> is a low range damage spell. It doesn't require line of sight.</ZauberText>
                                    </Zauber>
                                    <Zauber>
                                    <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Composure}></SpellTooltip>}>
                                        <ZauberBild src={Spell_Composure} />
                                        </Tippy>
                                        <ZauberText><strong style={{ color: '#85C8ED' }}>Composure</strong> is a very high range damage spell. It only deals dmg when casted into a portal.</ZauberText>
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
