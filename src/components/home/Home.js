import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.h1`
padding-top: 150px ;
text-align: center;
font-family: 'Monoton';
font-size: 40px;
color: white;

`
const SubTitle = styled.div`
position: relative;

text-align: center;
font-family: 'Josefin Slab';
font-size: 30px;
color: white;
`

const Comment = styled.div`
margin: -10px;
font-family: 'Josefin Slab';
text-align: center;
/* font-family: 'Press Start 2P'; */
font-size: 30px;
color: white;
`


class Home extends Component {
    render() {
        return (
        <div>
                <Title><div>Jayme Marshall</div></Title>
                <SubTitle>  <div>Empathetic Full Stack Developer</div><br /></SubTitle>
             <Comment><div>I care about you and the problems you want to solve</div></Comment>  
               </div>
   
        );
    }
}

export default Home;