import React, { Component } from 'react';

import Header from "../Header";
import ContentRoute from "../Contentarea";
import "./index.css";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentRoute />
     
      </div>
    );
  }
}

export default App;
