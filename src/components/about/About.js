import React, { Component } from 'react';
import styled from 'styled-components';
import Contact from './Contact';

const ProjectWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: center;
`


const Title = styled.h1`
color: white;





`
class About extends Component {
    render() {
        return (
            <div>
                 <ProjectWrapper>
                <Contact />  
                <p>
              <Title><h1>About</h1></Title><br /><br />
                Vivamus at tellus ut urna vehicula volutpat eu quis nisi. <br /><br />
                Morbi elementum arcu ultrices, bibendum justo ac, molestie elit. <br />
                Sed nec nibh congue, tristique tellus interdum, mattis libero.<br/>
                In vulputate mi et sodales ultrices.<br/>
                Etiam vitae enim ut quam suscipit sodales in et ligula.<br/>
                Quisque vulputate tellus in lorem elementum, sed pharetra lectus commodo.<br/>
                Sed quis tortor scelerisque, tempus arcu id, efficitur lorem.<br/>
                    Cras a quam vitae odio malesuada finibus.<br />
                    </p>    
                    </ProjectWrapper>
            </div>
        );
    }
}

export default About;