import React, { Component } from "react";
import { render } from "react-dom";
import { calcData } from "./data";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";

function genMarks(max) {
  const marks = {};
  for (let i = 1; i <= max; i += 1) marks[i] = String(i);
  return marks;
}

const CalcSlider = ({
  name, max, sliderMove, value,
}) => (
  <>
    <div className="calc-name">{name}</div>
    <Slider
      min={1}
      max={max}
      marks={genMarks(max)}
      className="calc-slider"
      onChange={e => sliderMove(e)}
      value={value}
    />
  </>
);

class SecondaryApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValues: [3, 0],
    };
  }

  sliderMove(val, ind) {
    const { sliderValues } = this.state;
    sliderValues[ind] = val;
    console.log(sliderValues);
    this.setState({ sliderValues });
  }

  render() {
    const { sliderValues } = this.state;

    return (
      <>
        {calcData.map((el, idx) => <CalcSlider name={el[0]} max={el[1]} sliderMove={e => this.sliderMove(e, idx)} value={sliderValues[idx]} />)}

      </>
    );
  }
}

// ========================================
render(<SecondaryApp />, document.getElementById("eu-secondary-app"));
