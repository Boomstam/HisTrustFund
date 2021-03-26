import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Lyrics = ({ children }) => (
  <StaticQuery
    query={graphql`
        query LyricsQuery {

          allFile (filter:{ relativePath:{ in:[
            "allegory.png", "bait.png",  "love.png", "love2.png", "roleModel.png", "tyche.png"
            ]} }){
           edges {
             node {
              childImageSharp{
                sizes(maxWidth: 8000) {
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

      <TopMargin/>

        <Container>
          <StyledImg sizes={data.allFile.edges[2].node.childImageSharp.sizes} />
        </Container>

        <LyricsMargin/>

        <Container>
          <StyledImg sizes={data.allFile.edges[1].node.childImageSharp.sizes} />
        </Container>
        
        <LyricsMargin/>

        <Container>
          <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[3].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[4].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[5].node.childImageSharp.sizes} />
        </Container>

        {children}
      </>
    )}
  />
)

/*
<Container>
          <StyledImg sizes={data.allFile.edges[5].node.childImageSharp.sizes} />
        </Container>
*/
//(filter:{ relativePath:{ eq:"allegory.png" } })

const TopMargin = styled.div`
{
  margin: 0vh 0vw 14vh 0vw;

}
`

const LyricsMargin = styled.div`
{
  margin: 0vh 0vw 14vh 0vw;
}
`

const Container = styled.div`
{

  width: 80%;
  margin: 0vh 0vw 0vh 15vw;

  @media (min-width: 800px){
    margin: 0vh 0vw 0vh 8vw;
  }
}
`

const StyledImg = styled(Img)`

z-index: -1;
`

export default Lyrics;