import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNavBar = styled.div`
 display: -webkit-flex;
   display: flex;
   -webkit-flex-direction: row;
   flex-direction: row;
   -webkit-justify-content: flex-end;
   justify-content: flex-end;
   margin: 10px;
   font-family: 'Josefin Slab';
 /* display: flex;
 justify-content: space-between;
align-items: left; */

/* text-decoration: none;
text-align:right;
color: white; */
`
const LinkStyle = styled.div`
 display: inline;
/* float: right; */

opacity: 0.4;
margin: 10px;
`;

class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
            <div>
                <LinkStyle><Link to="/"style={{ textDecoration: 'none', color: 'white' }}>Home</Link></LinkStyle>
                <LinkStyle><Link to="/projects"style={{ textDecoration: 'none', color: 'white' }}>Projects</Link></LinkStyle>
                <LinkStyle><Link to="/about"style={{ textDecoration: 'none', color: 'white' }}>About</Link></LinkStyle>
            </div>
            </StyledNavBar>
        );
    }
}

export default NavBar;