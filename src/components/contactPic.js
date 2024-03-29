import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

const ContactPic = ({ children }) => (
  <StaticQuery
    query={graphql`
        query ContactQuery {

          allFile (filter:{ relativePath:{ eq:"driesFoto.jpg" } }){
           edges {
             node {
              childImageSharp{
                sizes(maxWidth: 2000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
         }
       }

    }
      `}

    render={data => (
      <>
          <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
        {children}
      </>
    )}
  />
)

const StyledImg = styled(Img)`

  z-index: -1;

  margin: auto;
  width: 60%;

  @media (min-width: 700px) {
    width: 30%;
  }

  @media (min-width: 1050px) {
    width: 25%;
  }
`

export default ContactPic;