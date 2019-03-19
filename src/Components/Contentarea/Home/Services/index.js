import React, { Component } from 'react';

import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

import './Services.css';

class Services extends Component {
  
  render() {
    return (
        <div className="service sec-padding">
             <div className="title">   
                <h1><span>Our Services</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>   
             </div>
             <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <div className="service-box">
                            <MDBIcon fab icon="react" size="3x" className="cyan-text img-fluid" />
                            <h5 className="font-weight-bold my-4">ReactJs Development</h5>
                            <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="service-box">
                            <MDBIcon fab icon="wordpress-simple" size="3x" className="gray" />
                            <h5 className="font-weight-bold my-4">Wordpress Development</h5>
                            <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="service-box">
                            <MDBIcon fab icon="html5" size="3x" className="orange-text" />
                            <h5 className="font-weight-bold my-4">Front-End-Development</h5>
                            <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
             </MDBContainer>
        </div>
    );
  }
}

export default Services;
