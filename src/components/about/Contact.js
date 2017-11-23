import React, { Component } from 'react';
import styled from 'styled-components';


// STYLES
const ContactWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: center;
`

const ContactDescription = styled.div`
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
    margin: 10px;
    /* text-align:center; */
 
}
p {
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    color: white;
    margin: 8px;
}
`

class Contact extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                
                <ContactWrapper>
                    <ContactDescription>
                        <h1>Let's Chat</h1>
                    
                        <p>Email: arcal619@gmail.com</p>
                        <p>Email: arcal619@gmail.com</p>
                        <p>Email: arcal619@gmail.com</p>
                        
                        </ContactDescription>    
                </ContactWrapper>
            </div>
        );
    }
}

export default Contact;


 /* display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    margin-top: -15px; */