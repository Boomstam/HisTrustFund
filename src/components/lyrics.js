import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Lyrics = ({ children }) => (
  <StaticQuery
    query={graphql`
        query LyricsQuery {

          allFile (filter:{ ext:{ eq:".png" } }){
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
          <StyledImg sizes={data.allFile.edges[15].node.childImageSharp.sizes} />
        </Container>

        <LyricsMargin/>

        <Container>
          <StyledImg sizes={data.allFile.edges[16].node.childImageSharp.sizes} />
        </Container>
        
        <LyricsMargin/>

        <Container>
          <StyledImg sizes={data.allFile.edges[13].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[12].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[11].node.childImageSharp.sizes} />
        </Container>

        <Container>
          <StyledImg sizes={data.allFile.edges[14].node.childImageSharp.sizes} />
        </Container>
        {children}
      </>
    )}
  />
)
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