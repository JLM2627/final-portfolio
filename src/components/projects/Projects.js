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
margin: 150px;


`
const ProjectDisplay = styled.div`

background-size: cover;
 background-color: white;
rgba: (0, 0, 0, 0);

text-align: center;
width: 325px;
height: 325px;
h3 {
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    background-color: white;
}
p {
    font-family: 'Roboto Mono', monospace;
    font-size: 17px;
    font-weight: bold;
    color: black;
}
`
const ProjectLinks = styled.div`
display: flex;
justify-content: space-around;
a {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    color: black;
    text-decoration: none;
    margin: 11px;
    letter-spacing: 7px;
    text-align: center;
    padding: 5px;
    background-color: white;
    /* box-shadow: -2px 2px 0px red; */
}
`


class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectWrapper>
                    <Project>
                        <ProjectDisplay>
                            <h3>Desserts For Every Mood</h3>
                            <p>This project is an app in which a user is looking for a dessert that will match their "mood". the user creates an acct and then is redirected to the landing page. from the landing page, the user can then pick from 3 preselected emotions that will return specific recipes corresponding with the selected emotion.</p>
                        </ProjectDisplay>
                        <ProjectLinks>
                        <a href="https://github.com/JLM2627/DFEM" target="_blank" >GitHub</a>
                        <a href="https://dry-garden-60079.herokuapp.com/" target="_blank" >Deployed</a>
                        </ProjectLinks>
                    </Project>

                    <Project>
                    <ProjectDisplay>
                        <h3>Neighborhood Crime App</h3>
                        <p> I created an app for people to post tips on suspicious activity so they and others in the community could be more aware of their surroundings

</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/JLM2627/new_crime" target="_blank" >GitHub</a>
                        <a href="https://new-crime.herokuapp.com/" target="_blank" >Deployed</a>
                    </ProjectLinks>
                </Project> 
                </ProjectWrapper>
            </div>
        );
    }
}

export default Projects;