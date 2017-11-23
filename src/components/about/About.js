import React, { Component } from 'react';
import styled from 'styled-components';
// import Contact from './Contact';

const AboutWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: center;
`
const AboutDescription = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 15px; 
h1 {
    font-family: 'Roboto Mono', monospace;
    font-size: 36px;
    /* padding: 1px; */
    letter-spacing: 1px;
    /* margin: 8px; */
 
}
p {
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    color: white;
}
`  






class About extends Component {
    render() {
        return (
            <div>
                 <AboutWrapper>
               < AboutDescription>    
                
              <h1>Background:</h1>
              <p> Vivamus at tellus ut urna vehicula volutpat eu quis nisi. <br /><br />
                Morbi elementum arcu ultrices, bibendum justo ac, molestie elit. <br />
                Sed nec nibh congue, tristique tellus interdum, mattis libero.<br/>
                In vulputate mi et sodales ultrices.<br/>
                Etiam vitae enim ut quam suscipit sodales in et ligula.<br/>
                Quisque vulputate tellus in lorem elementum, sed pharetra lectus commodo.<br/>
                Sed quis tortor scelerisque, tempus arcu id, efficitur lorem.<br/>
                    Cras a quam vitae odio malesuada finibus.<br />
                        </p>   
                        </AboutDescription>     
                    </AboutWrapper>
            </div>
        );
    }
}

export default About;