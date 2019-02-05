import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Lyrics from '../components/lyrics'
import styled from 'styled-components';

const Words = () => (
  <>
    <Layout>
    </Layout>

    <Lyrics />
  </>
)

/*
<Paragraph>
      It's a smack in the face or a kiss of the lips
            </Paragraph>
    <Paragraph>
      and little in between
            </Paragraph>*/
const Paragraph = styled.div`
{
  color: white;
  text-align: center;
  margin: auto;
  font-size: 4vmin;
  padding: 0vh 0vw 1vh 0vw;
}
`


export default Words;
