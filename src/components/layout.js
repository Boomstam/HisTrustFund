import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from '../components/nav';
import Facebook from '../components/facebook';
import Instagram from '../components/instagram';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

      <Background />
        <Nav />


        <Facebook />
        <Instagram />

        {children}
      </>
    )}
  />
)

const Background = styled.div`
{
    z-index: -2;
    position: fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;

    background-color: black;
    backround-size: cover;
  }
  `

export default Layout
