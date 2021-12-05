import React, { Component } from 'react';
import Social from '../components/Social';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h1>I'm Dharani</h1>
            <h3>Software Developer </h3>
            <br></br>
            <p>Hey,this is my homepage, so I have to say something about myself.
            I'm a BE graduated student.I am passionate about web development.Its 
            very much interesting to learn new things and creating a web page.
            </p>
            <Social/>
            </div>
            
            )
        }
    }
    
export default About
    