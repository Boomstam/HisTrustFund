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

          allFile (filter:{ relativePath:{ eq:"line.png" } }){
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

  
`

const StyledImg = styled(Img)`
  
  width: 15vmin;

`

export default Hamburger;