import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import YouTube from 'react-youtube';
import styled from 'styled-components';

class Video extends React.Component {
  render() {
    const opts = {
      width: '100%',
      height: 400,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Layout>
      
        <LinkMargin />

        <ExternalLink href="https://www.youtube.com/channel/UCosvQvCPE5K1D6VCcJF3k4w/featured">
          Watch us on Youtube
        </ExternalLink>

        <LinkMargin />

        <YouTubeContainer>
          <YouTube
            videoId="h3-5VFtjbQk"
            opts={opts}
            onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="cYOy0XNzOxE"
            opts={opts}
            onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="I1-yZKvrBYw"
            opts={opts}
            onReady={this._onReady}
          />
        </YouTubeContainer>
      </Layout>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const YouTubeContainer = styled.div`
{
  width: 100%;
  margin: auto;

  @media (min-width: 700px) {
    width: 75%;
  }

  @media (min-width: 1100px) {
    width: 50%;
    padding: 2vh 0vw 2vh 0vw;
  }
}
`

const ExternalLink = styled.a`
{
    color: rgba(50, 79, 111, 1);
    text-decoration-line: underline;
    
    margin: 0vh 0vw 0vh 23.5vw;
    font-size: 6vw;

    @media (min-width: 1000px) {
        margin: 0vh 0vw 0vh 36.5vw;
        font-size: 3vw;
      }
}
`

const LinkMargin = styled.div`
{
    height: 5vh;
}
`

export default Video;