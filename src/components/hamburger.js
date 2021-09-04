import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import state from '../state/state'

function hamburgerClick()
{
  state.menuToggler.toggleMenu();
}

const Hamburger = ({ children }) => (
  <StaticQuery
    query={graphql`
        query HamburgerQuery {

          allFile (filter:{ relativePath:{ eq:"whiteLine.png" } }){
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
        <div>
          <StyledHamburger onClick={hamburgerClick}>
            <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
            <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
            <StyledImg sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
          </StyledHamburger>
        </div>
        {children}
      </>
    )}
  />
)

const StyledHamburger = styled.div`
  position: fixed;
  top: 0;
  left: 1vw;
  overflow: visible;
  width: 16vmin;
  z-index: 10;
  cursor: pointer;    

  &:hover {
    width: 18vmin;
  } 
`

const StyledImg = styled(Img)`
  width: 100%;
  overflow: visible;
  margin: 2vh 5vw 0vh 0vw;
`

export default Hamburger;