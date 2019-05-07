import React, { Component } from "react";
import { render } from "react-dom";

class SecondaryApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      something: "tady bude taky appka",
    };
  }

  render() {
    const { something } = this.state;

    return something;
  }
}

// ========================================
render(<SecondaryApp />, document.getElementById("eu-secondary-app"));
