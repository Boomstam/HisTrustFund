import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'
import PdfIcon from '../components/pdfIcon';

class NlContactData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            
        <Margin/>
        <BioTitle>
          His Trust Fund
        </BioTitle>
        <BioBand>
        
        <p>His Trust Fund is het geesteskind van songwriter Philippe François die weet dat het hoogste goed van de mensheid het kapitaal van het hart is. His Trust Fund is de cocon die hij rond zijn songs heeft gesponnen, waarin deze tot ontpoppen kunnen komen. Naar eigen zeggen maken ze tekstueel gedreven symfonische folkrootspop in kleine bezetting. </p>
        <p>Na vele jaren de barren en kleinere podia in Vlaanderen en Groot-Brittanië afgeschuimd te hebben brachten ze hun eerste EP uit in september 2018, onder de wakende oren van Peter De Smedt en Alban Sarens. In 2019 doken ze Studio La Patrie van producer-magiër Koen Gisen in. Hij werkte eerder al met sonore namen als An Pierlé, Dans Dans, The Bony King Of Nowhere, …  In januari 2021 werd het debuut album The Free Market Loves You de wereld in gestuurd.  </p>
        <p>Daarop toont de band z’n volledige kunnen. Ze sluipen moeiteloos door de voor en achterkamers van de populaire muziek: country ballads, old school reggae, serenades van een Latijns-Amerikaanse aandoende zoetheid, rauwe gitaarfolk gespeeld als vanop een krakende porch, een stomend verzetslied tegen racisme, …</p>
        <p>Het album werd warm ontvangen door de pers, onder meer in  
              <StyledLink href="https://focus.knack.be/entertainment/magazine/his-trust-fund/article-normal-1695105.html"> Focus Knack</StyledLink>, 
              <StyledLink href="https://www.enola.be/2021/01/29/philippe-francois-his-trust-fund-ik-kan-me-grondig-storen-aan-hoe-stiefmoederlijk-artiesten-hun-teksten-behandelen/"> Enola</StyledLink>, 
              <StyledLink href="https://luminousdash.be/interview/his-trust-fund/"> Luminous Dash</StyledLink>, 
              <StyledLink href="http://www.allkindsofeverything.be/minnebo-meets-his-trust-fund/"> Musiczine</StyledLink> and 
              <StyledLink href="https://www.nieuwsblad.be/cnt/dmf20210129_95277237"> Het Nieuwsblad</StyledLink>.</p>
            <p>His Trust Fund is </p>
            <Member>Philippe François - Gitaar {"&"} stem</Member>
            <Member>Menno Buggenhout - Electrische gitaar</Member>
            <Member>Mattias Geernaert - Contrabas</Member>
            <Member>Sara Raes - Stem {"&"} percussie</Member>
            <Member>Eva Tulkens - Stem {"&"} percussie</Member>
            <Member>Sep François - Drums {"&"} percussie</Member>
        </BioBand>

        <BioTitle>
          Philippe François
        </BioTitle>
        <BioSolo>
        <p>Vanaf zijn vijftiende nam Philippe François de gitaar van zijn vader, die in een hoekje stof stond te vergaren, ter hand en begon onmiddellijk zijn eigen nummers te schrijven. Ongeveer gelijktijdig leerde hij het werk van Neil Young, Paul Simon, Leonard Cohen, Bob Dylan, The Beatles en vele andere sixties grootheden spelen. Artiesten die een blijvende indruk op hem hebben nagelaten.</p>

        <p>7 jaar later, op z’n 23ste nadat hij het toen in het voetlicht tredende The Bony King Of Nowhere had verlaten, ontmoette hij Menno Buggenhout en begon te bouwen aan wat de 6-koppige band His Trust Fund is geworden. </p>
        <p>His Trust Fund is ook het pseudoniem waaronder hij al zijn nummers in hun oorspronkelijke vorm brengt. Elke song ontstaat met z’n folkgitaar binnen handbereik. Een solo optreden wekt dan ook als vanzelfsprekend herinneringen op aan Townes Van Zand en Nick Drake.  </p>

        <p>In de pers worden de songs van François vergeleken met de poëtische intensiteit van Leonard Cohen, de melodieuze souplesse van Caetano Veloso, de gedragenheid van Nick Cave en, in eigen land, met de melancholie van Flying Horseman. Zijn breekbare baritonstem legt de klemtoon bij de tekstzegging en die komt binnen zoals je dat van een doorleefde poëet verwachten mag. </p>

        </BioSolo>

        

        

        <LinkBg>
          <EmailLink href="mailto:histrustfund@gmail.com">
            histrustfund@gmail.com
          </EmailLink>
        </LinkBg>
        
      </>
      
    );
    }
}
/*
<a href={data.allFile.edges[0].node.publicURL}>
          </a>*/

          const Member = styled.p`
          {
            margin-bottom: 0px;
          }`

          const StyledLink = styled.a`
          {
              color: white;
              text-decoration: underline;
              &: hover {
                color: white;
                text-decoration: underline;
                }
          }
          `

const Margin = styled.div`
{
    margin: 0vh 0vw 15vh 0vw;
}`

const Icon = styled.a`

  width: 10%;

  &: hover {
    width: 15%;
    }
`

const Channel = styled.div`
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0vh 0vw 8vh 0vw;
}`

const BioTitle = styled.div`
{
  margin: 50px 200px;
  color: white;
  font-size: 36px;
}`

const BioSolo = styled.div`
{
  margin: 50px 200px;
  align-items: center;
  justify-content: center;
  color: white;
}`

const BioBand = styled.div`
{
  margin: 50px 200px;
  align-items: center;
  justify-content: center;
  color: white;
}`

const Description = styled.div`
{
  color: white;
  font-size: 5vmin;
  margin:  0vh 1vw 0vh 1vw;
}
`

const EmailLink = styled.a`
{   
  color: white;
  position: fixed;
  left: 40vw;
  bottom: 5vh;
  font-size: 24px;

  &: hover {
    color: white;
    text-decoration-line: underline;
    font-size: 30px;
    left: 38.5vw;
    bottom: 4vh;
  }
  text-decoration-line: underline;
}
`

const LinkBg = styled.div`
{   
  width: 80vw;
  background-color: black;
  height: 15vh;
  z-index: 99;
  position: fixed;
  left: 10vw;
  bottom: 0vh;
}`

export default NlContactData;