import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "rc-slider/lib/Slider";
import { calcData, calcResults } from "./data";
import "rc-slider/assets/index.css";

function genMarks(max) {
  const marks = {};
  for (let i = 1; i <= max; i += 1) marks[i] = String(i);
  return marks;
}

function recountValues(values) {
  /*
    prepocet slajditek prijmu a majetku
    1 Vysoký příjem a velký majetek
    2 Vysoký příjem a malý majetek
    3 Nízký příjem a velký majetek
    4 Nízký příjem a malý majetek
  */
  let povVal;
  if (values[3] === 2 && values[4] === 2) povVal = 1;
  else if (values[3] === 2 && values[4] === 1) povVal = 2;
  else if (values[3] === 1 && values[4] === 2) povVal = 3;
  else if (values[3] === 1 && values[4] === 1) povVal = 4;

  const newValues = values.slice(0, 3).concat([povVal]).concat(values.slice(5));
  return newValues;
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
    const recountedValues = recountValues(sliderValues);

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
          {calcResults.map(el => (
            <div key={el[0]}>
              <div>{el[0]}</div>
              <div>{el[1](recountedValues)}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

// ========================================
render(<SecondaryApp />, document.getElementById("eu-secondary-app"));
