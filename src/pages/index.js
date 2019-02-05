import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../components/cover'
import styled from 'styled-components';
import Hoes from '../components/hoes'
import * as Scroll from 'react-scroll'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function epClick()
{
  console.log("epCLick");

  scroll.scrollToBottom();
}

const IndexPage = () => (
  
  <>
    <Layout>
    </Layout>
    
    <Title>
      His Trust Fund
    </Title>
    <Cover />
    <EPText onClick={epClick}>
      EP out now
    </EPText>
  <Hoes/>
  </>
)

//<a id="header" href="[your link]">Logo</a>

const Title = styled.div`
{
  color: white;
  font-size: 10vmin;
  text-align: center;
  margin: 10vh 0vw 0vh 0vw;

  @media (min-width: 550px) {
    margin: 3vh 0vw 2vh 0vw;
  }
}
`

const EPText = styled.div`
{
  color: white;
  font-size: 6vmin;
  text-align: center;
  margin: 10vh 0vw 0vh 0vw;

  @media (min-width: 650px) {
    margin: 5vh 0vw 0vh 0vw;
  }

  @media (min-width: 1150px) {
    margin: 4vh 0vw 0vh 0vw;
  }

  &: hover {
    font-size: 7vmin;
    transform: translate(0, -1vh);
  }
}
`

export default IndexPage;