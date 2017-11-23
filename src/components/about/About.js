import React, { Component } from 'react';
import styled from 'styled-components';


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
margin: 100px; 
h1 {
    font-family: 'Roboto Mono', monospace;
    font-size: 36px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    text-align: center;
 
}
p {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
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
                
              <h1>Background</h1>
              <p> Vivamus at tellus ut urna vehicula volutpat eu quis nisi. 
                Morbi elementum arcu ultrices, bibendum justo ac, molestie elit.
                Sed nec nibh congue, tristique tellus interdum, mattis libero.
                In vulputate mi et sodales ultrices.
                Etiam vitae enim ut quam suscipit sodales in et ligula.
                Quisque vulputate tellus in lorem elementum, sed pharetra lectus commodo.
                Sed quis tortor scelerisque, tempus arcu id, efficitur lorem.
                    Cras a quam vitae odio malesuada finibus.
                        </p>   
                        </AboutDescription>     
                    </AboutWrapper>
            </div>
        );
    }
}

export default About;