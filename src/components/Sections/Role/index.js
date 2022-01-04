import React from 'react';
import { Button } from '../../buttonElement.js';
import Spell1 from '../../../images/Spell_1.png'
import Spell2 from '../../../images/Spell_FlexPortal.png'
import Spell_CurativePalm from '../../../images/Spell_HeilendeHand.png'
import Spell_Healing from '../../../images/Spell_Wundheilung.png'
import Spell_Conflagration from '../../../images/Spell_Umsturz.png'
import Spell_MutualAssistence from '../../../images/Spell_GegenseitigeHilfe.png'
import Spell_WakfuRay from '../../../images/Spell_Wakfustrahl.png'
import Spell_Virus from '../../../images/Spell_Virus.png'
import Spell_Distribution from '../../../images/Spell_Verteilung.png'
import Spell_Distortion from '../../../images/Spell_Verzerrung.png'
import ElioBasicSkin from '../../../images/Elio_Basic_Skin.png'

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
   ZauberText,
   RoleTop,
   TopSubtitle
} from './RoleElements'

import SpellTooltip from '../../SpellTooltips'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';

import Spell_Beschreibung_Portal from '../../../images/Spell_Beschreibung_Portal.png'
import Spell_Beschreibung_FlexPortal from '../../../images/Spell_Beschreibung_FlexPortal.png'
import Spell_Beschreibung_CurativePalm from '../../../images/Spell_Beschreibung_HeilendeHand.png'
import Spell_Beschreibung_Healing from '../../../images/Spell_Beschreibung_Wundheilung.png'
import Spell_Beschreibung_Conflagration from '../../../images/Spell_Beschreibung_Umsturz.png'
import Spell_Beschreibung_MutualAssistence from '../../../images/Spell_Beschreibung_GegenseitigeHilfe.png'
import Spell_Beschreibung_WakfuRay from '../../../images/Spell_Beschreibung_WakfuStrahl.png'
import Spell_Beschreibung_Virus from '../../../images/Spell_Beschreibung_Virus.png'
import Spell_Beschreibung_Distribution from '../../../images/Spell_Beschreibung_Verteilung.png'
import Spell_Beschreibung_Distortion from '../../../images/Spell_Beschreibung_Verzerrung.png'



const RoleSection = () => {
   return (
      <>
         <RoleContainer lightBg={false} id="role">
            <RoleWrapper>
               <RoleTop>
                  <TopLine>Role</TopLine>
                  <TopSubtitle darkText={false}>Eliotrope is a great choice either for solo-playing or placed in a team.</TopSubtitle>
               </RoleTop>
               <RoleRow imgStart={false}>
                  <Column1>
                     <TextWrapper>
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
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Portal}></SpellTooltip>}>
                                 <ZauberBild src={Spell1} />
                              </Tippy>
                              <ZauberText>
                                 Dmg Boost: 25% + 2%per cell the spell is "traveling" (blue lines on hover)
                              </ZauberText>
                           </Zauber>
                           <br />
                           <br />
                           <strong>Flexible Portal:</strong>
                           <br />
                           <Zauber>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_FlexPortal}></SpellTooltip>}>
                                 <ZauberBild src={Spell2} />
                              </Tippy>
                              <ZauberText>Dmg Boost: 5%  + 2%per cell the spell is "traveling"</ZauberText>
                           </Zauber>
                        </Subtitle>
                        <ImgWrap>
                           <Img src={ElioBasicSkin} alt="/" />
                        </ImgWrap>
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
                     <TextWrapper>
                        <Heading lightText={true}>Healer</Heading>
                        <Subtitle darkText={false}>
                           Eliotropes got multiple ways to heal allies.<br />
                           Most of these are based on the maximum-healthpoints of the target:
                           <Zauber>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_CurativePalm}></SpellTooltip>}>
                                 <ZauberBild src={Spell_CurativePalm} />
                              </Tippy>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Healing}></SpellTooltip>}>
                                 <ZauberBild src={Spell_Healing} />
                              </Tippy>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Conflagration}></SpellTooltip>}>
                                 <ZauberBild src={Spell_Conflagration} />
                              </Tippy>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_MutualAssistence}></SpellTooltip>}>
                                 <ZauberBild src={Spell_MutualAssistence} />
                              </Tippy>
                           </Zauber>
                           <br />
                           Intelligence-Eliotropes come with some more heal spells like "Wakfu-Ray" depending on their intelligence-stat and heal-stat or even based on the damage they do ("Virus", "Distribution").
                           <Zauber>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_WakfuRay}></SpellTooltip>}>
                                 <ZauberBild src={Spell_WakfuRay} />
                              </Tippy>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Virus}></SpellTooltip>}>
                                 <ZauberBild src={Spell_Virus} />
                              </Tippy>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Distribution}></SpellTooltip>}>
                                 <ZauberBild src={Spell_Distribution} />
                              </Tippy>
                           </Zauber>
                           <br />
                           <Zauber>
                              <ZauberText>When there is an Eliotrope in your team who placed a Totem ("Distortion"), all team-members will get a small amount of heal (5% max hp) when entering (walking, beeing pushed, ...) into a portal.</ZauberText>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Distortion}></SpellTooltip>}>
                                 <ZauberBild src={Spell_Distortion} />
                              </Tippy>
                           </Zauber>
                           <br />
                           <br />
                           Overall, portals increase your heal in the same way they increase your damage.<br />
                           <Zauber>
                              <ZauberText>Additionally some spells like "Curative Palm" got higher base-heal when casted into a portal.</ZauberText>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_CurativePalm}></SpellTooltip>}>
                                 <ZauberBild src={Spell_CurativePalm} />
                              </Tippy>
                           </Zauber>
                        </Subtitle>
                        <Heading lightText={true}>Positioner</Heading>
                        <Subtitle darkText={false}>
                           <Zauber>
                              <ZauberText>Thanks to their main spell "Portal", Eliotropes are great positioners.</ZauberText>
                              <Tippy theme="tomato" maxWidth="1000px" content={<SpellTooltip Bild={Spell_Beschreibung_Portal}></SpellTooltip>}>
                                 <ZauberBild src={Spell1} />
                              </Tippy>
                           </Zauber>
                           <br />
                        It allows allies and ennemies to walk through, to teleport to another portal or to cast spells into, to be able to hit nearly anywhere possible.
                        <br />
                           <br />
                         Also Eliotropes have many other movement-spells to push & pull ennemies, allies and themselves or to create new portals.
                  </Subtitle>
                     </TextWrapper>
                  </Column2>
               </RoleRow>
            </RoleWrapper>
         </RoleContainer>
      </>
   )
}

export default RoleSection
