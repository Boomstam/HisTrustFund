import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import state from '../state/state'
import Img from 'gatsby-image';

class LinkIcon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <a href={this.props.link}>
                    <StyledImg sizes={this.props.image}>

                    </StyledImg>
                </a>
            </>
        );
    }
}

const StyledImg = styled(Img)`

  z-index: -1;

  margin: auto;
  width: 10%;

  @media (min-width: 700px) {
    width: 5%;
  }

  @media (min-width: 1050px) {
    width: 5%;
  }
`

export default LinkIcon;