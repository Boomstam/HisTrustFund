import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

//allFile (filter:{ relativePath:{ eq:"freeMarket.png"} }){

const ShopContent = ({ children }) => ( <
    StaticQuery query = { graphql `
        query ShopQuery {

          allFile (filter:{ relativePath:{ in:["freeMarket.png", "EP.jpg"]} }){
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
      ` }

    render = {
        data => ( 
          <>
          <ShopContainer>
            <Container to = { "https://histrustfundmusic.bandcamp.com/album/the-free-market-loves-you" }>
              <BandcampLink to = { "https://histrustfundmusic.bandcamp.com/album/the-free-market-loves-you" }>
                The Free Market Loves You
              </BandcampLink>
            <ShopImg sizes = { data.allFile.edges[1].node.childImageSharp.sizes }/>
            </Container> 
              <Spacy/>
            <Container to = { "https://histrustfundmusic.bandcamp.com/album/ep" }>
              <BandcampLink to = { "https://histrustfundmusic.bandcamp.com/album/ep" }>
                EP
              </BandcampLink>
            <ShopImg sizes = { data.allFile.edges[0].node.childImageSharp.sizes }/>
            </Container>
            </ShopContainer>
            <Spacy/>
            
            { children } 
            </>
        )
    }
    />
)

const ShopContainer = styled.div`
{
  @media (min-width: 800px) {
    margin-left: -300px;
  }
}
`

const Container = styled(Link) `
{
  margin-top: 5%;
  display: block;
  margin-left: 10%;
  width: 80%;
  @media (min-width: 800px) {
    width: 60%;
    margin-left: 20%;
    &:hover{
      font-size: 40px;
    }
  }
  overflow: visible;
  display: flex;
}
`

const BandcampLink = styled.div
`
{
  width: 60%;
  font-size: 24px;
  color: white;
  line-height: 10vh;
  margin-top: 5%;
  float: left;
    &:hover{
        font-size: 26px;
    }
    @media (min-width: 600px) {
      font-size: 36px;
      &:hover{
        font-size: 40px;
      }
    } 
    text-align: right;
    overflow: visible;
}
`

const ShopImg = styled(Img)
`
  float: right;
  margin: auto;
  width: 20%;
  &:hover{
    width: 22%;
    transform: translateY(-2%);
}
overflow: visible;
`

const Spacy = styled.div`
{
  padding: 50px;
}
`

export default ShopContent;