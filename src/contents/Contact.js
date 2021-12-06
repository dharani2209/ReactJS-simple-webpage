import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  :   dharani@tringapps.com</h3>
            <h3>Contact   : 9788028413</h3>
            <h3>Address  :
                Tringapps Research Labs Pvt.ltd
                <br></br>
                Svalar square 
                <br></br>
                Chennai
                <br></br>
                600032</h3> 
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    
