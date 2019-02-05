import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SpotifyPlayer from 'react-spotify-player';
import styled from 'styled-components';
import { Link } from 'gatsby';
import VideoComp from '../components/videoComp';

const Video = ({ data }) => {
    return (
        <>
            <Layout>
            </Layout>

            <VideoComp image={data.allFile.edges[0].node.childImageSharp.sizes}/>      
        </>
    );
}


/*
<LinkMargin />

            <ExternalLink href="https://open.spotify.com/artist/4np4RORjvCLrxNlor0zSm4">
                Spotify
                </ExternalLink>

            <LinkMargin />
            */

//color: rgba(50, 79, 111, 1);
/*
const ExternalLink = styled.a`
{
    color: white;
    text-decoration-line: none;
    
    margin: 0vh 0vw 0vh 17vw;
    font-size: 6vw;

    @media (min-width: 1000px) {
        margin: 0vh 0vw 0vh 32.5vw;
        font-size: 3vw;
      }
}
`

const LinkMargin = styled.div`
{
    height: 10vh;
}
`*/

const PlayerContainer = styled.div`
{
    margin: auto;
    width: 50%;
}
`
export const query = graphql`
  query YoutubeIconQuery {

    allFile (filter:{ relativePath:{ eq:"youtube.png" } }){
           edges {
             node {
              childImageSharp {
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
         }
       }

  }
`

export default Video;