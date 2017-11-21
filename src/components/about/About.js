import React, { Component } from 'react';
import Contact from './Contact';

class About extends Component {
    render() {
        return (
            <div>
                 
                <Contact />  
                <p>
                <h1>About</h1> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /><br />
                Vivamus at tellus ut urna vehicula volutpat eu quis nisi. <br /><br />
                Morbi elementum arcu ultrices, bibendum justo ac, molestie elit. <br />
                Sed nec nibh congue, tristique tellus interdum, mattis libero.<br/>
                In vulputate mi et sodales ultrices.<br/>
                Etiam vitae enim ut quam suscipit sodales in et ligula.<br/>
                Quisque vulputate tellus in lorem elementum, sed pharetra lectus commodo.<br/>
                Sed quis tortor scelerisque, tempus arcu id, efficitur lorem.<br/>
                    Cras a quam vitae odio malesuada finibus.<br />
                    </p>    

            </div>
        );
    }
}

export default About;