import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "rc-slider/lib/Slider";
import { calcData } from "./data";
import "rc-slider/assets/index.css";

function genMarks(max) {
  const marks = {};
  for (let i = 1; i <= max; i += 1) marks[i] = String(i);
  return marks;
}

function calcResults(values, variable) {
  console.log(values, variable)
  switch (variable) {
    case 0:
      return 1 / (1 + Math.exp(-0.27 + -0.61 * values[0] + 0.57 * values[1] + -0.13 * values[2] + -0.12 * values[3] + -0.16 * values[4] + 0.29 * values[5] + 0.13 * values[6] + -0.15 * values[7] + 0.12 * values[8]));
    case 1:
      return 1 / (1 + Math.exp(0.90 + -0.48 * values[0] + 0.31 * values[1] + -0.09 * values[2] + 0.08 * values[3] + -0.01 * values[4] + 0.08 * values[5] + 0.48 * values[6] + -0.08 * values[7] + -0.12 * values[8]));
    case 2:
      return 1 / (1 + Math.exp(3.45 + -0.73 * values[0] + 0.70 * values[1] + -0.24 * values[2] + -0.08 * values[3] + -0.07 * values[4] + -0.05 * values[5] + 0.20 * values[6] + -0.11 * values[7] + -0.23 * values[8]))
    default:
      return 0;
  }
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
      sliderValues: new Array(calcData.length).fill(1),
    };
  }

  sliderMove(val, ind) {
    const { sliderValues } = this.state;
    sliderValues[ind] = val;
    this.setState({ sliderValues });
  }

  render() {
    const { sliderValues } = this.state;

    return (
      <>
        <div id="calc-sliders">
          {calcData.map((el, idx) => (
            <CalcSlider
              key={el[0]}
              name={el[0]}
              max={el[1]}
              sliderMove={e => this.sliderMove(e, idx)}
              value={sliderValues[idx]}
            />
          ))}
        </div>
        <div id="calc-results">
          <div>
            <div>Spokojenost s fungováním v EU</div>
            <div>{calcResults(sliderValues, 0)}</div>
          </div>
          <div>
            <div>Referendum</div>
            <div>{calcResults(sliderValues, 2)}</div>
          </div>
        </div>
      </>
    );
  }
}

// ========================================
render(<SecondaryApp />, document.getElementById("eu-secondary-app"));
