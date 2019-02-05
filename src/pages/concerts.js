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
        <Paragraph>As befits the angel</Paragraph>
        <Paragraph>You sing a thousand joys</Paragraph>
      </Title>
      <ConcertInfo date="22/2" venue="Het Bos" link="http://www.hetbos.be/agenda/2019/2/22/"/>
      <ConcertInfo date="6/4" venue="Cactus Club" link="https://www.cactusmusic.be/NL/Concerten/Kalender/the-bony-king-of-nowhere"/>
    </Layout>
  </>
)

const Paragraph = styled.div`
{
  color: white;
  text-align: center;
  margin: auto;
  padding: 0vh 0vw 1vh 0vw;
  font-size: 5vmin;
  font-style: italic;
}
`

const Title = styled.div`
{
  padding: 3vh 0vw 3vh 0vw;
  text-align: center;
  margin: auto;
}
`

export default Concerts;