import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Hamburger from './hamburger'
import Menu from './menu'
import state from '../state/state'

class ConcertInfo extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <>
            <DataContainer>
                <ConcertData>
                    <Date>
                        {this.props.date}
                    </Date>
                    <Venue>
                        {this.props.venue}
                    </Venue>
                    <ConcertLink href={this.props.link}>
                        Tickets
                    </ConcertLink>
                </ConcertData>
                </DataContainer>
            </>
        );
    }
}

const DataContainer = styled.div`
    background-image: linear-gradient(to right, 
    rgba(50, 79, 111, 0.2), 
    rgba(157, 192, 216, 0.3), 
    rgba(50, 79, 111, 0.2));

    margin: 3vh 5vw 3vh 5vw;
}`

const ConcertData = styled.div`
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10vh 0vw 10vh 0vw;
    margin: 3vh 5vw 3vh 5vw;
}`

const Date = styled.div`
{
    color: white;
    font-size: 5vw;
    font-weight: bold;
}
`

const Venue = styled.div`
{
    color: white;
    font-size: 5vw;
}
`

const ConcertLink = styled.a`
{   
    color: white;
    text-decoration-line: none; 

    font-size: 5vw;
}
`

export default ConcertInfo;