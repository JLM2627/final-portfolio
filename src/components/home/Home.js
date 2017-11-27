import React, { Component } from 'react';
import styled from 'styled-components';
// import NavBar from '../static/NavBar';


const HomeWrapper = styled.div`
/* background: url(https://i.imgur.com/tc2Qsxk.png);
background-size: 100%; 
  background-size: cover;
  height: 100vh; */
`

const Title = styled.h1`
padding: 100px 0 0 0;
text-align: center;
font-family: 'Monoton';
font-size: 38px;
color: white;
/* opacity: 0.6; */
`
const SubTitle = styled.div`
position: relative;
/* margin: -145px 0px 0px 0px; */
text-align: center;
font-family: 'Josefin Slab';
font-size: 16px;
color: white;
`

const Comment = styled.div`
margin: -10px;
font-family: 'Josefin Slab';
text-align: center;
/* font-family: 'Press Start 2P'; */
font-size: 16px;
color: white;
`


class Home extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <HomeWrapper>
                <Title><h1>Jayme Marshall</h1></Title>
                <SubTitle>  <div>Empathetic Full Stack Developer</div><br /></SubTitle>
             <Comment><div>I care about you and the problems you want to solve</div></Comment>  
             </HomeWrapper>
            </div>
        );
    }
}

export default Home;