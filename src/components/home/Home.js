import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.h1`
padding: 100px 0 0 0;
text-align: center;
font-family: 'Monoton';
font-size: 38px;
color: white;
opacity: 0.6;
`


class Home extends Component {
    render() {
        return (
            <div>
                <Title><h1>This is the homepage</h1></Title>
               
            </div>
        );
    }
}

export default Home;