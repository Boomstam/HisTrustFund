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
      <ConcertInfo date="17/10" venue="Handelsbeurs" link="https://www.handelsbeurs.be/nl/concert/kraakpand-met-oa-zee-skirts"/>
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