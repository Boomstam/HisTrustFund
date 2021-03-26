import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

const Instagram = ({ children }) => (
    <StaticQuery
        query={graphql`
        query InstagramQuery {

          allFile (filter:{ relativePath:{ eq:"instagram.png" } }){
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
                <a href="https://www.instagram.com/his_trustfund/">
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
    bottom: 2vh;
    right: 2vh;
    width: 20%;
    
    &:hover{
        width: 24%;
      }

    @media (min-width: 660px) {
        width: 10%;
        &:hover{
            width: 12%;
          }
      }
}
`

const StyledImg = styled(Img)`

transform: translateY(5%);
margin: auto;
width: 100%;
`

export default Instagram;