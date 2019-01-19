import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Lyrics = ({ children }) => (
  <StaticQuery
    query={graphql`
        query LyricsQuery {

          allFile (filter:{ relativePath:{ eq:"allegory.png" } }){
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
        <Container>
          <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
        </Container>
        {children}
      </>
    )}
  />
)

const Container = styled.div`
{

  width: 80%;
  margin: 0vh 0vw 0vh 10vw; 
}
`

const StyledImg = styled(Img)`

z-index: -1;
`

export default Lyrics;