import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import YouTube from 'react-youtube';
import styled from 'styled-components';
import LinkIcon from '../components/linkIcon';

class Video extends React.Component {

constructor(props)
{
    super(props);
}

  render() {
    const opts = {
      width: '100%',
      height: 400,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
      <Title>
      <Paragraph>
      For a glimpse beyond the veil
      </Paragraph>
      <Paragraph>
      many killings were done
      </Paragraph>
      </Title>

      <Icon>
            <LinkIcon image={this.props.image}
            link="https://www.youtube.com/channel/UCosvQvCPE5K1D6VCcJF3k4w/featured">
            </LinkIcon>
      </Icon>


      <YTContainers>

      <YouTubeContainer>
          <YouTube
            videoId="qWdlJfAnx6E"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>
        
        <YouTubeContainer>
          <YouTube
            videoId="OkolPGavo94"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="YyTHoSLITmo"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="z6ahuD4gsBI"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>
        
      <YouTubeContainer>
          <YouTube
            videoId="XGuxrcRbVPM"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>
        
        <YouTubeContainer>
          <YouTube
            videoId="h3-5VFtjbQk"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="cYOy0XNzOxE"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>

        <YouTubeContainer>
          <YouTube
            videoId="2lKPPnY-Zpc"
            opts={opts}
            //onReady={this._onReady}
          />
        </YouTubeContainer>
        </YTContainers>
      </div>
    );
  }
    /*<ExternalLink href="https://www.youtube.com/channel/UCosvQvCPE5K1D6VCcJF3k4w/featured">
      Watch us on Youtube
    </ExternalLink>*/
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const Title = styled.div`
{
  padding: 3vh 0vw 3vh 0vw;
  text-align: center;
  margin: auto;
}
`

const Icon = styled.div`
{
    padding: 2vh 0vw 0vh 0vw;

    @media(min-width: 800px){
      padding: 2vh 0vw 5vh 0vw;
    }

    &: hover{
      width: 150%;
      margin: auto;
      transform: translate(-25vw);
    }
}`

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

const YouTubeContainer = styled.div`
{
}
`

const YTContainers = styled.div`
{
  position: absolute;
  top: 40vh;
  
  z-index: -1;

  width: 80%;
  transform: translate(10vw);

  @media(min-width: 800px){
    width: 50%;
    transform: translate(25vw);
  }
}
`

export default Video;