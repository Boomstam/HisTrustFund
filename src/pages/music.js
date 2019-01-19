import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SpotifyPlayer from 'react-spotify-player';
import styled from 'styled-components';
import { Link } from 'gatsby';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
    width: '100%',
    height: 300,
};
const view = 'coverart'; // or 'coverart'
const theme = 'white'; // or 'white'

class Music extends React.Component {
    render() {
        return (
            <>
            <Layout>
            </Layout>
                
            <LinkMargin/>

                <ExternalLink href="https://open.spotify.com/artist/4np4RORjvCLrxNlor0zSm4">
                    Check out our EP on Spotify
                </ExternalLink> 

                <LinkMargin/>

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
}

const ExternalLink = styled.a`
{
    
    color: rgba(50, 79, 111, 1);
    text-decoration-line: underline;
    
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
`

const PlayerContainer = styled.div`
{
    margin: auto;
    width: 50%;
}
`

export default Music;