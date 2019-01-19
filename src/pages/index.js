import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../components/cover'
import styled from 'styled-components';

const IndexPage = () => (
  <>
      <Background/>
      <Layout>
      </Layout>
      <Cover/>
      </>
)

const Background = styled.div`
{
    z-index: -2;
    position: absolute;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;

    background-image: radial-gradient(rgba(50, 79, 111, 0.7), white);
    background-size: cover;
  }
  `
  //background-color: rgba(50, 79, 111, 1);
  //background-color: rgba(157, 192, 216, 1);
  //background-color: rgba(50, 85, 139, 1);

export default IndexPage
