import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SpotifyPlayer from 'react-spotify-player';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LinkIcon from '../components/linkIcon';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
    width: '100%',
    height: 300,
};
const view = 'coverart'; // or 'coverart'
const theme = 'white'; // or 'white'

const Music = ({ data }) => {
    return (
        <>
            <Layout>
            </Layout>

            <Title>
            <Paragraph>
            The melodies drifting 
            </Paragraph>
            <Paragraph>
            from birdsong to the oceans rustling
            </Paragraph>
            </Title>

            <Icon>
            <LinkIcon image={data.allFile.edges[0].node.childImageSharp.sizes}
            link="https://open.spotify.com/artist/4np4RORjvCLrxNlor0zSm4">
            </LinkIcon>
            </Icon>

            <PlayerContainer>

                <SpotifyPlayer
                    uri="spotify:album:6Bl9BTz1BAVTB9EJ1RLKJD"
                    size={size}
                    view={view}
                    theme={theme} />

            </PlayerContainer>
        </>
    );
}

const Icon = styled.div`
{
    padding: 1vh 0vw 5vh 0vw;

    &: hover{
        width: 150%;
        margin: auto;
        transform: translate(-25vw);
      }
}`

const Title = styled.div`
{
  padding: 3vh 0vw 3vh 0vw;
  text-align: center;
  margin: auto;
}
`

const Paragraph = styled.div`
{
  color: white;
  text-align: center;
  margin: auto;
  padding: 0vh 0vw 1vh 0vw;
  font-size: 4vmin;
  font-style: italic;
}
`

const PlayerContainer = styled.div`
{
    position: absolute;
    top: 35vh;
    transform: translate(25vw);
    margin: auto;
    width: 50%;
    z-index: -1;

    width: 80%;
    transform: translate(10vw);
    
    @media (min-width: 650px) {
        top: 39vh;
    }
    @media (min-width: 800px) {
        top: 43vh;
        width: 50%;
      transform: translate(25vw);
    }
}
`
export const query = graphql`
  query SpotifyIconQuery {

    allFile (filter:{ relativePath:{ eq:"spotify.png" } }){
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
`

export default Music;