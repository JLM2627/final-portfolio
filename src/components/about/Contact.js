import React, { Component } from 'react';
import styled from 'styled-components';


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
    font-size: 30px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    /* text-align:center; */
 
}
a {
    text-decoration: none;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
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
                        <h1>Let's Connect</h1>
                    
                        {/* <p>Email: arcal619@gmail.com</p> */}
                        <a href="https://www.linkedin.com/in/jayme-marshall/" target="_blank" >Linkedin</a>
                        <a href="https://github.com/JLM2627" target="_blank" >GitHub</a>
                        <a>arcal619@gmail.com</a>
                        
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