import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBContainer } from "mdbreact";

import About from '../../../../Statics/images/about.png';

import './AboutUs.css';

class AboutUs extends Component {
  
  constructor() {
    super();
    this.state = { 

      title: "About Us",
      titledetail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      abouttitle: "About Our Company",

    };
  }

  render() {
    return (
        <div className="about-us sec-padding">
             <div className="title">   
                <h1><span>{this.state.title}</span></h1>
                <p>{this.state.titledetail}</p>   
             </div>
             <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <h4 className="font-weight-bold my-4">{this.state.abouttitle}</h4>
                        <p className="mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <p className="mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                            <img src={About} className="img-fluid" alt="About Us"  />
                    </MDBCol>
                </MDBRow>
             </MDBContainer>
        </div>
    );
  }
}

export default AboutUs;
