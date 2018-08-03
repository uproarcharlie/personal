import React, { Component } from "react";

import Projects from "./Projects.js";
import Focus from './Focus.js';
import Interests from './Interests.js';

class Expertise extends Component {

  render() {
    return (
      <div>
        <Focus />
        <hr />
          <Projects />
          <hr />
          <Interests />    
      </div>
    )
  }
};

export default Expertise;
