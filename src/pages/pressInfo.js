import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactData from '../components/contactData';
import NlContactData from '../components/nlContactData';
import styled from 'styled-components';
import state from '../state/state';
import Img from 'gatsby-image';
import YouTube from 'react-youtube';
/*var en = true;*/



const PressInfo = ({ children }) => ( <
    
    StaticQuery query = { graphql `
        query PressInfoQuery {

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
            <Layout>
              <Title>
              <Paragraph>
              As long as we do not remain strangers
              </Paragraph>
              </Title>
              
              <PressImg sizes = { data.allFile.edges[1].node.childImageSharp.sizes }/>
            <Margin/>

            {isEn() &&  <Language onClick={(e) => {handleClick()}}>NL</Language>}
            {!isEn() &&  <Language onClick={(e) => {handleClick()}}>EN</Language>}

              
              
              {isEn() && 
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
            </>
              }
              {!isEn() && 
              
              
              <>
              <BioTitle>
              His Trust Fund - The band
            </BioTitle>
            <BioBand>
            
            <p>His Trust Fund is het geesteskind van songwriter Philippe François die weet dat het hoogste goed van de mensheid het kapitaal van het hart is. His Trust Fund is de cocon die hij rond zijn songs heeft gesponnen, waarin deze tot ontpoppen kunnen komen. Naar eigen zeggen maken ze tekstueel gedreven symfonische folkrootspop in kleine bezetting. </p>
    
            <p>Na vele jaren de barren en kleinere podia in Vlaanderen en Groot-Brittanië afgeschuimd te hebben brachten ze hun eerste EP uit in september 2018, onder de wakende oren van Peter De Smedt & Alban Sarens. In 2019 doken ze Studio La Patrie van producer-magiër Koen Gisen in. Hij werkte eerder al met sonore namen als An Pierlé, Dans Dans, The Bony King Of Nowhere, …  In januari 2021 werd het debuut album The Free Market Loves You de wereld in gestuurd.</p>
    
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
            <PressImg sizes = { data.allFile.edges[0].node.childImageSharp.sizes }/>
            <BioTitle>
              The man
            </BioTitle>
            <BioSolo>
            <p>Vanaf zijn vijftiende nam Philippe François de gitaar van zijn vader, die in een hoekje stof stond te vergaren, ter hand en begon onmiddellijk zijn eigen nummers te schrijven. Ongeveer gelijktijdig leerde hij het werk van Neil Young, Paul Simon, Leonard Cohen, Bob Dylan, The Beatles en vele andere sixties grootheden spelen. Artiesten die een blijvende indruk op hem hebben nagelaten.</p>
    
            <p>7 jaar later, op z’n 23ste nadat hij het toen in het voetlicht tredende The Bony King Of Nowhere had verlaten, ontmoette hij Menno Buggenhout en begon te bouwen aan wat de 6-koppige band His Trust Fund is geworden. His Trust Fund is ook het pseudoniem waaronder hij al zijn nummers in hun oorspronkelijke vorm brengt. Elke song ontstaat met z’n folkgitaar binnen handbereik. Een solo optreden wekt dan ook als vanzelfsprekend herinneringen op aan Townes Van Zand {"&"} Nick Drake. </p>
            
            <p> In de pers worden de songs van François vergeleken met de poëtische intensiteit van Leonard Cohen, de melodieuze souplesse van Caetano Veloso, de gedragenheid van Nick Cave en, in eigen land, met de melancholie van Flying Horseman. Zijn breekbare baritonstem legt de klemtoon bij de tekstzegging en die komt binnen zoals je dat van een doorleefde poëet verwachten mag. </p>
    
            </BioSolo>
          
            <LinkBg>
              <EmailLink href="mailto:histrustfund@gmail.com">
                histrustfund@gmail.com
              </EmailLink>
            </LinkBg>
            </>
              
              
              }

              <YouTubeContainer>
          <YouTube
            videoId="5482jh0Nsps"
            opts={options}
          />
        </YouTubeContainer>
        <EndSpace/>
        
            </Layout>
            
            { children } 
            </>
        )
    }
    />
)

/*const PressImg = styled(Img)`
{
  
}
`

const Margin = styled.div`
{
    margin: 0vh 0vw 15vh 0vw;
}`*/

const Language = styled.a`
{
    color: white;
    margin-left: 49%;
    width: 1%;
    text-decoration: underline;
    font-size: 30px;
    &: hover{
        text-decoration: underline;
        color: white;
        cursor: pointer;
      }
}`


/*const PressInfo = () => (
  <>
    <Layout>
      
      <Title>
      <Paragraph>
      As long as we do not remain strangers
      </Paragraph>
      </Title>
    
      {getLanguage() && <ContactData/>}
      {!getLanguage() && <NlContactData/>}

      <div>
        
      </div>
      <a onClick={(e) => {handleClick()}}>NL</a>

    </Layout>
  </>
)*/

const options = {
    height: '390',
    width: '60%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

function isEn(){
    let storedEn = getLanguage();
    if(storedEn === 'en'){
        return true;
    }
    return false;
}

function getLanguage() {

    if(typeof localStorage === 'undefined')
    {
        return 'en';
    
    } else {
        
        let storedEn = localStorage.getItem( 'en' );
      
        if(storedEn === undefined || storedEn === null)
        {
            return 'en';
        }
        return storedEn;
    }
}

function storeLanguage(en) {
    console.log('set en');
    console.log(en);
    localStorage.setItem( 'en', en )
}

function handleClick()
{
        let storedEn = getLanguage();

        if(storedEn === 'en'){
          storedEn = 'nl';
        } else {
          storedEn = 'en';
        }
        storeLanguage(storedEn);

        window.location.reload();
}



const YouTubeContainer = styled.div`
{
    margin-left: 28%;
}
`

const Title = styled.div`
{
  padding: 3vh 0vw 0vh 0vw;
  text-align: center;
  margin: auto;
}
`

const Paragraph = styled.div`
{
  color: white;
  text-align: center;
  margin: auto;
  font-size: 4vmin;
  padding: 0vh 0vw 1vh 0vw;
  font-style: italic;
}
`

const Container = styled.div`
{
  
}
`

const EndSpace = styled.div`
{ 
  padding: 100px;
}`






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




export default PressInfo;

/*
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components';
import state from '../state/state';

const nlFlag = "NL.png";
const ukFlag = "UK.png";

const nlLang = "NL";
const enLang = "EN";

function onLoad()
{
    var lang = getInitialLanguage();

    var nl = (lang === nlLang);
    
    state.languageState.setLanguage(nl);
}

function languageImage(data, nl)
{
    var imgName = nlFlag;
    
    if(nl === false)
    {
        imgName = ukFlag;
    }
  
    return data.allImageSharp.edges.find(
    obj => { 
      return obj.node.fluid.originalName === imgName
    }
    ).node.sizes;
}

function handleClick(nl)
{
    var newLang = Boolean(nl);
    var currentLang = Boolean(state.languageState.getLanguage());

    if(newLang === currentLang)
    {
        return;
    }
        var lang = nlLang;

        if(newLang === false)
        {
            lang = enLang;
        }
        state.languageState.setLanguage(newLang);

        storeLanguage(lang);

        window.location.reload();
}

function getInitialLanguage() {

    if(typeof localStorage === 'undefined')
    {
        return "NL";
    
    } else {
        
        var nl = localStorage.getItem( 'language' );
    
        if(nl === undefined || nl === null)
        {
            return "NL";
        }
        return nl; 
    }
}

function storeLanguage(lang) {

    localStorage.setItem( 'language', lang )
}

const selStyle = {
    width:  "50%",
};

const unselStyle = {
    width:  "37%",
};

function flagStyle(nl)
{
    var currentLang = state.languageState.getLanguage();

    if(nl === currentLang)
    {
        return selStyle;
    }
    return unselStyle;
}

export default () => (
    <StaticQuery
        query={graphql`
        query LanguageQuery {
          
            allImageSharp {
                edges {
                    node {
                        fluid{
                            originalName
                        }
                        sizes(maxWidth: 1800) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }

        }
      `}
      
        render={data => (
            <StyledLangs onLoad={onLoad()}>
                <Container onClick={(e) => {handleClick(true)}}>
            <Flag
                style={flagStyle(true)}
                sizes={languageImage(data, true)}/>
                </Container>
                <Space/>
                <Container onClick={(e) => {handleClick(false)}}>
            <Flag 
                style={flagStyle(false)}
                sizes={languageImage(data, false)}/>
                </Container>
            </StyledLangs>
        )}
    />
)

const StyledLangs = styled.div`
@media (min-width: 650px) {
    width: 7vw;
    left: 92vw;
}
    

    position: fixed;
    left: 83vw;
    top: 0vh;
    padding: 1vmin;
    width: 16vw;
    z-index: 999;
`

const Container = styled.div`
display: inline;
&:hover{
    cursor: pointer;
}
`

const Flag = styled(Img)`
    opacity: 0.7;
    width: 45%;
    display: inline-block;
    z-index: 999;
`

const Space = styled.div`
    
    width: 10%;
    display: inline-block;
`
*/