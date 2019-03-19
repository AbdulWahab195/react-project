import React, { Component } from 'react';

import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services';
import Portfolio from './Portfolio';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <AboutUs />
                <Services />
                <Portfolio />
            </div>
        )
    }
}

export default Home;
