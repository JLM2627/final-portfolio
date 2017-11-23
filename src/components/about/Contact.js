import React, { Component } from 'react';
import styled from 'styled-components';


// STYLES
const Wrapper = styled.div`
    /* display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    margin-top: -15px; */
`

class Contact extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                
                <Wrapper>
                    <div>HERE WILL BE ALL OF MY LINKS</div>
                </Wrapper>
            </div>
        );
    }
}

export default Contact;
