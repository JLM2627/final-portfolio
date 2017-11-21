import React, { Component } from 'react';
// import AboutMe from '../AboutMe/AboutMe';
// import AllProjects from '../Projects/AllProjects'
import styled from "styled-components";


const StyledNavBar = styled.div`
height: 10px;
display: block;
padding-top:10px;
padding-bottom: 19px;
justify-content: space-around;
font-size: 15px;
background: rgba(255, 255, 255);
font-family: 'Josefin Slab';
text-align: right;
`
const HeadLink = styled.a`
text-decoration: none;
text-align: right;
color: white;
opacity: 0.3;
margin: 10px;
`;

class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
            <div>
                    <HeadLink href={"/"}>Home</HeadLink>
                    <HeadLink href="/About">About Me</HeadLink>  
                <HeadLink href="/Projects">Projects</HeadLink>    
            </div>
            </StyledNavBar>
        );
    }
}

export default NavBar;