import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
   margin: 10px;
   font-family: 'Josefin Slab';

`
const LinkDescription = styled.div`
 display: inline;
opacity: 0.4;
margin: 10px;
a {
    text-decoration: none;
    color: white;
}
`;

class NavBar extends Component {
    render() {
        return (
            <NavBarContainer>
            <div>
                <LinkDescription><Link to="/"><a>Home</a></Link></LinkDescription>
                <LinkDescription><Link to="/projects"><a>Projects</a></Link></LinkDescription>
                    <LinkDescription><Link to="/about"><a>About</a></Link></LinkDescription>
                    <LinkDescription><Link to="/contact"><a>Contact</a></Link></LinkDescription>    
            </div>
            </NavBarContainer>
        );
    }
}

export default NavBar;