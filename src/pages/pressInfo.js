import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactData from '../components/contactData'
import styled from 'styled-components';

const PressInfo = () => (
  <>
    <Layout>
      
      <Title>
      <Paragraph>
      As long as we do not remain strangers
      </Paragraph>
      </Title>

      <ContactData />

    </Layout>
  </>
)


const Title = styled.div`
{
  padding: 15vh 0vw 0vh 0vw;
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

export default PressInfo;