import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E" where="PSNA CET" from=" 2017" to="2021"/>
            <Widecard title="HSC" where="SMB MATRIC HR SEC SCHOOL" from="2016" to="2017"/>
            </div>
            )
        }
    }
    
export default Education
    