import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

const Facebook = ({ children }) => (
    <StaticQuery
        query={graphql`
        query FacebookQuery {

          allFile (filter:{ relativePath:{ eq:"zuckerberg.png" } }){
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
                <a href="https://nl-nl.facebook.com/HisTrustFund/">
                    <Container>
                        <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
                    </Container>
                </a>
                {children}
            </>
        )}
    />
)

const Container = styled.div`
{
  z-index: 11;
    position: fixed;
    bottom: 4vh;
    left: 4vh;
    width: 8%;

    &:hover{
        width: 12%;
      }

    @media (min-width: 660px) {
        width: 4%;
        &:hover{
            width: 6%;
          }
      }
}
`

const StyledImg = styled(Img)`



transform: translateY(5%);
margin: auto;
width: 100%;
`

export default Facebook;