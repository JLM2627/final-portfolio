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
    font-size: 30px;
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
              <p> 
				  Born and raised in the South. <br />
				  Moved to San Diego, California for 5 years. <br />
				  Followed my love of helping people from nursing to technology. <br />
                        </p>   
                        </AboutDescription>     
                    </AboutWrapper>
            </div>
        );
    }
}

export default About;