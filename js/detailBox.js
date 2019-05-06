import React, { Component } from "react";
import { RadarGraf } from "./radarGraf";
import { GrafPreference } from "./grafPreference";
import { graphMeta, voterCategories } from "./data";

export class DetailBox extends Component {
  constructor(props) {
    super(props);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleGraphChange = this.handleGraphChange.bind(this);
  }

  handleCatChange(event) {
    const { onCatChange } = this.props;
    onCatChange(event.target.value);
  }

  handleGraphChange(event) {
    const { onGraphChange } = this.props;
    onGraphChange(event.target.value);
  }

  render() {
    const { catId, graphId } = this.props;
    return (
      <div id="detail-box">
        <div id="cat-switch">
          {
            voterCategories.map((el, idx) => {
              const buttonClass = String(catId) === String(idx) ? "graph-btn graph-btn-selected" : "graph-btn";
              return (
                <button type="button" className={buttonClass} key={el} value={idx} onClick={id => this.handleCatChange(id)}>
                  {el}
                </button>
              );
            })
          }
        </div>
        <RadarGraf catId={catId} graphId={graphId} />
        <div id="radar-switch">
          {
            graphMeta.map((el, idx) => {
              const buttonClass = String(graphId) === String(idx) ? "graph-btn graph-btn-selected" : "graph-btn";
              return (
                <button type="button" className={buttonClass} key={el[0]} value={idx} onClick={id => this.handleGraphChange(id)}>
                  {el[0]}
                </button>
              );
            })
          }
        </div>
        <GrafPreference catId={catId} />
      </div>
    );
  }
}

export default DetailBox;
