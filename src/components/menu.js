import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import state from '../state/state'

class Menu extends React.Component{

    componentDidMount()
    {
        console.log("menu mount");
        //state.menuToggler.close();
        //state.menuToggler.close();
    }

    handleClick(event)
    {
        state.menuToggler.close();
    }

    render(){
        
        const home = "/";
        const music = "/music";
        const video = "/video";
        const words = "/words";
        const concerts = "/concerts";
        const buyus = "/buyus";
        const pressInfo = "/pressInfo";

    return(
            <StyledMenu>
                <TopMargin/>
                <StyledLink to={home} onClick={(event) => this.handleClick(event, home)}>
                    Home
                </StyledLink>
                <StyledLink to={music} onClick={(event) => this.handleClick(event, music)}>
                    Music
                </StyledLink>
                <StyledLink to={video} onClick={(event) => this.handleClick(event, video)}>
                    Video
                </StyledLink>
                <StyledLink to={words} onClick={(event) => this.handleClick(event, words)}>
                    Words
                </StyledLink>
                <StyledLink to={concerts} onClick={(event) => this.handleClick(event, concerts)}>
                    Concerts
                </StyledLink>
                <StyledLink to={buyus} onClick={(event) => this.handleClick(event, buyus)}>
                    Buy us
                </StyledLink>
                <StyledLink to={pressInfo} onClick={(event) => this.handleClick(event, pressInfo)}>
                    About
                </StyledLink>
            </StyledMenu>
        );
    }
}

const StyledMenu = styled.div`
    
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgba(0.8, 0.8, 0.8, 0.8);
    background-size: cover;
    
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    
    font-size: 6vmin;
    text-align: center;
    line-height: 10vh;

    hover: hotpink;

    text-decoration-line: none;
    color: white;

    &:hover{
        font-size: 7vmin;
        color: white;
    }
`

const TopMargin = styled.div`
    
    padding: 8vh;
`
    
export default Menu;