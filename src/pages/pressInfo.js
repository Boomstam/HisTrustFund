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
            
              {isEn() && <ContactData/>}
              {!isEn() && <NlContactData/>}

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

const PressImg = styled(Img)`
{
  
}
`

const Margin = styled.div`
{
    margin: 0vh 0vw 15vh 0vw;
}`

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