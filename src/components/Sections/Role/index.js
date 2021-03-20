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
                              <ZauberBild src={Spell1} title="Portal" />
                              <ZauberText>
                                 Dmg Boost: 25% + 2%per cell the spell is "traveling" (blue lines on hover)
                              </ZauberText>
                           </Zauber>
                           <br />
                           <br />
                           <strong>Flexible Portal:</strong>
                           <br />
                           <Zauber>
                              <ZauberBild src={Spell2} title="Flexible Portal" />
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
                              <ZauberBild src={Spell_CurativePalm} title="Curative Palm" />
                              <ZauberBild src={Spell_Healing} title="Healing" />
                              <ZauberBild src={Spell_Conflagration} title="Conflagration" />
                              <ZauberBild src={Spell_MutualAssistence} title="Mutual Assistence" />
                           </Zauber>
                           <br />
                           Intelligence-Eliotropes come with some more heal spells like "Wakfu-Ray" depending on their intelligence-stat and heal-stat or even based on the damage they do ("Virus", "Distribution").
                           <Zauber>
                              <ZauberBild src={Spell_WakfuRay} title="Wakfu Ray" />
                              <ZauberBild src={Spell_Virus} title="Virus" />
                              <ZauberBild src={Spell_Distribution} title="Distribution" />
                           </Zauber>
                           <br />
                           <Zauber>
                              <ZauberText>When there is an Eliotrope in your team who placed a Totem ("Distortion"), all team-members will get a small amount of heal (5% max hp) when entering (walking, beeing pushed, ...) into a portal.</ZauberText>
                              <ZauberBild src={Spell_Distortion} title="Distortion" />
                           </Zauber>
                           <br />
                           <br />
                           Overall, portals increase your heal in the same way they increase your damage.<br />
                           <Zauber>
                              <ZauberText>Additionally some spells like "Curative Palm" got higher base-heal when casted into a portal.</ZauberText>
                              <ZauberBild src={Spell_CurativePalm} title="Curative Palm" />
                           </Zauber>
                        </Subtitle>
                        <Heading lightText={true}>Positioner</Heading>
                        <Subtitle darkText={false}>
                           <Zauber>
                              <ZauberText>Thanks to their main spell "Portal", Eliotropes are great positioners.</ZauberText>
                              <ZauberBild src={Spell1} title="Portal" />
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
