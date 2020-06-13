import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

const Hoes = ({ children }) => (
  <StaticQuery
    query={graphql`
        query HoesQuery {

          allFile (filter:{ relativePath:{ eq:"FreeMarket.jpg" } }){
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
  position: absolute;
  padding: 0vh 0vw 25vh 0vw;
  @media (min-width: 500px) {
    padding: 0vh 0vw 20vh 0vw;
  }
  z-index: 1;
  top: 100vh;
  left: 10vw;
  width: 80%;
  margin: auto;
}
`

const StyledImg = styled(Img)`

z-index: 1;

transform: translateY(5%);
margin: auto;
width: 100%;

@media (min-width: 500px) {
  width: 80%;
}

@media (min-width: 660px) {
  width: 70%;
}

@media (min-width: 850px) {
  width: 60%;
}

@media (min-width: 950px) {
  width: 60%;
}

@media (min-width: 1050px) {
  width: 55%;
}

@media (min-width: 1150px) {
  width: 50%;
}

@media (min-width: 1250px) {
  width: 45%;
}

@media (min-width: 1350px) {
  width: 40%;
}

`

export default Hoes;