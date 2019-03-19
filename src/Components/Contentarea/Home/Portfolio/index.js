import React, { Component } from 'react';

import {  MDBRow, MDBCol, MDBContainer, MDBMask, MDBView } from "mdbreact";
import Project from '../../../../Statics/images/project.jpg';
import Project1 from '../../../../Statics/images/project1.jpg';
import Project2 from '../../../../Statics/images/project2.jpg';

import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
      super(props);
      this.state = {
        portfoliotitle: "Our Portfolio",
        counter: 0
      };

  }

  incrementCounter() {
      this.setState({
          counter: this.state.counter + 1
      });
  }

  decrementCounter() {
    this.setState({
        counter: this.state.counter - 1
    });
}

  render() {
    return (
        <div className="Portfolio sec-padding">
             <div className="title">   
                <h1><span>{this.state.portfoliotitle}</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>   
             </div>
             <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project1} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project2} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project1} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <MDBView hover zoom>
                                <img src={Project2} className="img-fluid" alt="About Us"  />
                                <MDBMask className="flex-center" overlay="purple-strong">
                                    <p className="white-text"><a href="#!">View Project</a></p>
                                </MDBMask>
                            </MDBView>
                            <h4>Fast Professioanl</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <div className="portfolio-sec">
                            <h4>{this.state.counter}</h4>
                            <button onClick={this.incrementCounter.bind(this)}> Increase </button>
                            <button onClick={this.decrementCounter.bind(this)}> Decrease </button>
                        </div>
                    </MDBCol>
                </MDBRow>
             </MDBContainer>
        </div>
    );
  }
}

export default Portfolio;
