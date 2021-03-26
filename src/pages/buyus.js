import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactData from '../components/contactData'
import styled from 'styled-components'
import ShopContent from '../components/shopContent'
//import App from '../components/app'

const Buyus = () => (
  <>
    <Layout>
      
      <Title>
      <Paragraph>
      Serving those who cannot repay
      </Paragraph>
      </Title>

    <ShopContent/>

    </Layout>
  </>
)


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

export default Buyus;