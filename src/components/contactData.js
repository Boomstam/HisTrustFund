import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'
import PdfIcon from '../components/pdfIcon';

const ContactData = ({ children, props }) => (
  <StaticQuery
    query={graphql`
        query ContactDataQuery {
            allFile(filter: { extension: { eq: "pdf" } }) {
              edges {
                node {
                  publicURL
                }
              }
            }
        }
      `}

    render={data => (
      <>

        <Margin/>

        <Channel>
          <Description>
            Technical Rider
          </Description>
          
          <Icon href={data.allFile.edges[0].node.publicURL}>
            <PdfIcon />
            </Icon>
        </Channel>

        <Channel>
          <Description>
            Press
          </Description>
          <Icon href={data.allFile.edges[1].node.publicURL}>
            <PdfIcon />
            </Icon>
        </Channel>

        <Channel>
          <EmailLink href="mailto:histrustfund@gmail.com">
            histrustfund@gmail.com
          </EmailLink>
        </Channel>

        {children}
      </>
    )}
  />
)
/*
<a href={data.allFile.edges[0].node.publicURL}>
          </a>*/

const Margin = styled.div`
{
    margin: 0vh 0vw 15vh 0vw;
}`

const Icon = styled.a`

  width: 10%;

  &: hover {
    width: 15%;
    }
`

const Channel = styled.div`
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0vh 0vw 8vh 0vw;

}`

const Description = styled.div`
{
  color: white;
  font-size: 5vmin;
  margin:  0vh 1vw 0vh 1vw;
}
`

const EmailLink = styled.a`
{   
    color: white;
    float : left;
    font-size: 4vmin;

    &: hover {
      color: white;
      text-decoration-line: underline;
      font-size: 5vmin;
      }

    text-decoration-line: underline;
}
`


export default ContactData;