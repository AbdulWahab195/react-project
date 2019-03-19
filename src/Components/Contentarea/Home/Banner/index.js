import React, { Component } from 'react';

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";

import Slideone from '../../../../Statics/images/slide-1.jpg';
import Slidetwo from '../../../../Statics/images/slide-2.jpg';
import Slidethree from '../../../../Statics/images/slide-3.jpg';
import './Banner.css';

class Banner extends Component {

    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

  render() {
    return (
        <div className="banner">
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1">
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img src={Slideone} className="img-fluid" alt="Slide One"  />
                            <MDBMask pattern={2} overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <h2 className="h3-responsive">ReactJs Developer</h2>
                        <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img src={Slidetwo} className="img-fluid" alt="Slide Two"  />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <h2 className="h3-responsive">Wordpress Developer</h2>
                        <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img src={Slidethree} className="img-fluid" alt="Slide Three"  />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <h3 className="h3-responsive">Search Engine Optimizer</h3>
                        <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
        </div>
    );
  }
}

export default Banner;
