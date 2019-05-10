import React, { Component } from "react";
import { render } from "react-dom";
import Slider from "rc-slider/lib/Slider";
import { calcData, calcResults } from "./data";
import "rc-slider/assets/index.css";

function genMarks(max, markNames) {
  const marks = {};
  [marks[1], marks[max]] = markNames;
  return marks;
}

const CalcSlider = ({
  name, max, sliderMove, value, markNames, tooltip,
}) => (
  <>
    <div className="calc-name"><span title={tooltip} className={tooltip && "calc-name-tooltiped"}>{name}</span></div>
    <Slider
      dots
      min={1}
      max={max}
      marks={genMarks(max, markNames)}
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
      sliderValues: [4, 3, 3, 2, 2, 2],
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
              markNames={el[2]}
              sliderMove={e => this.sliderMove(e, idx)}
              value={sliderValues[idx]}
              tooltip={el[3] || undefined}
            />
          ))}
        </div>
        <div id="calc-results">
          {calcResults.map(el => (
            <div key={el[0]}>
              <div>{el[0]}</div>
              <div className="calc-results-number">{el[1](sliderValues)}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

// ========================================
render(<SecondaryApp />, document.getElementById("eu-secondary-app"));
