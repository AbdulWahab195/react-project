import React from 'react';
import { Switch, Route } from 'react-router-dom';


import MainRoot from './App/App';

const Separate = () => (
  <Switch>
    
    <Route path="about-us" component={AboutUs} />
    <Route path="/" component={MainRoot} />
    
  </Switch>
);

export default Separate;
