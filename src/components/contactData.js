import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'
import PdfIcon from '../components/pdfIcon';

const ContactData = ({ children }) => ( 
<StaticQuery query = { graphql `
query ContactImgQuery {

  allFile (filter:{ relativePath:{ in:["band.jpeg", "man.jpeg"]} }){
   edges {
     node {
      childImageSharp{
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
 }
}

}
` }

render = {
data => ( 
    <>
            
            <BioTitle>
              His Trust Fund - The band
            </BioTitle>
            <BioBand>
            
            <p> Singer-songwriter Philippe François knows that the highest good of mankind is the capital of the heart. Like many masters of his craft he draws inspiration from his own experiences to shape the world surrounding him. In 2011 Menno Buggenhout (Undskyld, Four Aces Guitar Quartet, Alice Dance Bar) met up at his appartement one afternoon, caught a drift and they started playing his folky material backed by a double bass player and cellist. Double bass player Mattias Geernaert (Kosmo Sound, SUWI, Tiny Legs Tim) joined the band in 2014, the three became instant friends, making it a three piece for some time. Two years later Sara Raes and Eva Tulkens, both close harmony singers in The Jacquelines, brought their charm to His Trust Fund taking the band to a whole other level, while in the process becoming percussionists. </p>
    
            <p>His Trust Fund’s signature became sweet female vocals, a tapestry of intricate guitar patterns, a rhythmic backbone of double bass and exotic percussion laying underneath a stream of melancholic poetry. With their contemporary roots-based acoustic sound they easily sneak into the backrooms of popular music: a country song follows an old school reggae song, a soothing Latin serenade can be the prelude of a Malinese blues. </p>
    
            <p>In 2018 their first release, the mini album ‘EP’ with artwork of the wonderful graphic novelist Wide Vercnocke, came to the ears of Koen Gisen (Flying Horseman, Dans Dans, An Pierlé Quartet, The Bony King Of Nowhere, etc...). In the wake of their release His Trust Fund played shows at among others DEStudio, Cactus Club, Het Bos, Trix and some venues in the UK.</p>
    
            <p>Three years later, 2021, His Trust Fund releases The Free Market Loves You, recorded at Studio La Patrie, produced by Koen Gisen. 10 songs featuring the enticing rhythms of Robbe Kieckens, Xan Albrecht and Sep François. Each creating worlds of their own. The Free Market Loves You, with artwork by the inimitable Chloë Janssens and her sweet inspirators, 
              received very loving reviews of some of the Belgian press such as 
              <StyledLink href="https://focus.knack.be/entertainment/magazine/his-trust-fund/article-normal-1695105.html"> Focus Knack</StyledLink>, 
              <StyledLink href="https://www.enola.be/2021/01/29/philippe-francois-his-trust-fund-ik-kan-me-grondig-storen-aan-hoe-stiefmoederlijk-artiesten-hun-teksten-behandelen/"> Enola</StyledLink>, 
              <StyledLink href="https://luminousdash.be/interview/his-trust-fund/"> Luminous Dash</StyledLink>, 
              <StyledLink href="http://www.allkindsofeverything.be/minnebo-meets-his-trust-fund/"> Musiczine</StyledLink> and 
              <StyledLink href="https://www.nieuwsblad.be/cnt/dmf20210129_95277237"> Het Nieuwsblad</StyledLink>.</p>
            <p>His Trust Fund is </p>
            <Member>Philippe François - Guitar {"&"} vocals</Member>
            <Member>Menno Buggenhout - Electric guitar</Member>
            <Member>Mattias Geernaert - Double bass</Member>
            <Member>Sara Raes - Vocals {"&"} percussion</Member>
            <Member>Eva Tulkens - Vocals {"&"} percussion</Member>
            <Member>Sep François - Drums {"&"} percussion</Member>
            </BioBand>
            <PressImg sizes = { data.allFile.edges[0].node.childImageSharp.sizes }/>
            <BioTitle>
              The man
            </BioTitle>
            <BioSolo>
            <p>From the age of fifteen Philippe François took up his father’s guitar, which was gathering dust somewhere in a corner and started to write his own songs. Almost simultaneously he discovered the work of Neil Young, Paul Simon, Leonard Cohen, The Beatles and many other greats of the Sixties. These artists would leave a lasting impression on him. </p>
    
            <p>Seven years later, after he had left the emerging band The Bony King Of Nowhere, he met Menno Buggenhout and started building what would later on become the six-piece His Trust Fund. It’s also the pseudonym under which he performs his songs in their original guise, just his voice and his guitar. Each song is conceived with his folk guitar within reach. A solo gig naturally evokes memories of Townes Van Zand and Nick Drake</p>
            
            <p> In the press the songs of François are often compared with the poetic intensity of Leonard Cohen, the melodious subtlety of Caetano Veloso, the solidity of Nick Cave and, in his home country, with the melancholia of Flying Horseman. His brittle yet sturdy bariton emphasizes the lyrics and these hit you like the words of a mature and honest poet. </p>
    
            </BioSolo>
    
            
    
            
    
            <LinkBg>
              <EmailLink href="mailto:histrustfund@gmail.com">
                histrustfund@gmail.com
              </EmailLink>
            </LinkBg>
    
    { children } 
    </>
)
}
/>
)

const Member = styled.p`
{
  margin-bottom: 0px;
}`

const PressImg = styled(Img)`
{
  
}
`

const Margin = styled.div`
{
    margin: 0vh 0vw 15vh 0vw;
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
  width: 100vw;
  background-color: black;
  height: 15vh;
  z-index: 9;
  position: fixed;
  bottom: 0vh;
}`

export default ContactData;