import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: center;
`
const Project = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 15px;
`
const ProjectDisplay = styled.div`
/* background-image: url(https://i.imgur.com/AnGTD8V.png); */
/* background-size: cover; */
border: 5px double white;
padding: 5px;
text-align: center;
width: 250px;
height: 250px;
h3 {
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    background-color: yellow;
}
p {
    font-family: 'Roboto Mono', monospace;
    font-size: 9px;
    color: white;
}
`
const ProjectLinks = styled.div`
display: flex;
justify-content: space-around;
a {
    font-family: 'Roboto Mono', monospace;
    font-size: 9px;
    color: white;
    text-decoration: none;
    margin: 11px;
    letter-spacing: 7px;
    text-align: center;
    padding: 5px;
    background-color: blue;
    box-shadow: -2px 2px 0px red;
}
`


class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectWrapper>
                    <Project>
                        <ProjectDisplay>
                            <h3>Project 1</h3>
                            <p>short description</p>
                        </ProjectDisplay>
                        <ProjectLinks>
                        <a href="https://github.com" target="_blank" >GitHub</a>
                        <a href="herokuapp.com/" target="_blank" >Deplyed</a>
                        </ProjectLinks>
                    </Project>

                    <Project>
                    <ProjectDisplay>
                        <h3>Project Title</h3>
                        <p>Short description</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/" target="_blank" >GitHub</a>
                        <a href="herokuapp.com/" target="_blank" >Deployed</a>
                    </ProjectLinks>
                </Project>
                </ProjectWrapper>
            </div>
        );
    }
}

export default Projects;