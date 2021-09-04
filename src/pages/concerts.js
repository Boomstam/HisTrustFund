import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ConcertInfo from '../components/concertInfo'
import styled from 'styled-components';

const Concerts = () => (
  <>
    <Layout>
      <Title>
        <Paragraph>Let's sing a thousand joys</Paragraph>
      </Title>
      <ConcertInfo date="16/9" venue="De Bunker - Gemert NL" link="https://www.bunkergemert.nl/agenda/"/>
      <ConcertInfo date="19/9" venue="Sunday Mundane - Gent" link="https://facebook.com/events/s/sunday-mundane-theresia-gent/271137941524015/"/>
      <ConcertInfo date="6/11" venue="Cinema Klappei - Antwerpen" link="https://www.klappei.be/"/>
      <ConcertInfo date="9/12" venue="De Pul - Uden NL" link="https://www.livepul.com/agenda/singer-songwriter-sunday-vlaamse-editie/"/>
    </Layout>
  </>
)

const Paragraph = styled.div`
  color: white;
  text-align: center;
  margin: auto;
  padding: 0vh 0vw 1vh 0vw;
  font-size: 5vmin;
  font-style: italic;
`

const Title = styled.div`
  padding: 3vh 0vw 3vh 0vw;
  text-align: center;
  margin: auto;
`

export default Concerts;